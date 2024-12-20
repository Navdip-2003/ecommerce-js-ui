import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Select from "react-select";

const RetailerAddProduct = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(""); // Main category
  const [subcategory, setSubcategory] = useState(""); // Subcategory
  const [sizeOptions, setSizeOptions] = useState([]); // Dynamic size options
  const [selectedSizes, setSelectedSizes] = useState([]); // Selected sizes
  const [image, setImage] = useState(null); // Image upload state
  const [productTitle, setProductTitle] = useState(""); // Product title
  const [price, setPrice] = useState(""); // Product price
  const [discountedPrice, setDiscountedPrice] = useState(""); // Discounted price
  const [quantity, setQuantity] = useState(""); // Quantity
  const [description, setDescription] = useState(""); // Description
  const [isUploading, setIsUploading] = useState(false); // State for uploading status
  const [selectedColor, setSelectedColor] = useState("");


  const handleSizeChange = (selectedOptions) => {
    setSelectedSizes(selectedOptions.map((option) => option.value)); // Extract values into an array
  };

  // Fetch categories from the API
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch("/category/parentcategory");

  // Fetch subcategories based on selected category
  const { data: subcategories, loading: subcategoriesLoading, error: subcategoriesError } = useFetch(
    category ? `/category/subcategory/${category}` : null
  );

  const handleColorSelect = (color) => {
    setSelectedColor(color); // Update the selected color
  };

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubcategory(""); // Reset subcategory when category changes
  };

  // Handle subcategory selection change
  const handleSubcategoryChange = async (e) => {
    const subcategoryId = e.target.value;
    setSubcategory(subcategoryId);
    const product = subcategories.data.find((item) => item.id === subcategoryId);
    setSizeOptions(product.size.map((size) => ({ value: size, label: size })));    
  };
  

  // Handle image upload
  const handleImageUpload = async (event) => {
    console.log("Image Uploading ...");
    const file = event.target.files[0];
    if (file) {
      // Set uploading state to true
      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:8080/image", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          console.log(result);
          setImage(result.data.image);
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        // Reset uploading state after completion
        setIsUploading(false);
      }
    }
  };

  // Handle add product form submission
  const handleAddProduct = async () => {
    const discountRate = ((discountedPrice / price) * 100).toFixed(2); // Calculate discount rate
    let userData = null;
          try {
            const userDataCookie = Cookies.get('userData'); // Fetch from cookie
            if (userDataCookie) {
              userData = JSON.parse(userDataCookie); // Parse JSON string
            }
          } catch (error) {
            console.error("Failed to parse userData from cookie:", error);
          }

          const productData = {
            name: productTitle,
            description: description,
            price: parseFloat(price), // Ensure price is a float
            actualPrice: parseFloat(discountedPrice), // Ensure discountedPrice is a float
            discountRate: parseFloat(discountRate), // Ensure discountRate is a float
            categoryId: category,
            subcategoryId: subcategory,
            size: selectedSizes,
            colors: selectedColors,
            stock: parseInt(quantity), // Ensure quantity is an integer
            image: image,
            retailerId: "retailer",
            status: "ACTIVE", // You can modify this as needed
          };

    try {
      const response = await fetch("http://localhost:8080/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Product added successfully!");
        navigate("/retailer/product-list");
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Image Upload Section */}
      <div
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 w-full lg:w-1/3 cursor-pointer bg-white"
        style={{ height: "500px" }}
        onClick={() => document.getElementById("imageUpload").click()}
      >
        {isUploading ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="circular-progress"></div> {/* Custom Circular Progress */}
          </div>
        ) : image ? (
          <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
        ) : (
          <p className="text-gray-500 text-lg">Click to Add Image</p>
        )}
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        {/* Product Title */}
        <input
          type="text"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          placeholder="Product Title"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Price, Discounted Price, Quantity */}
        <div className="flex gap-4">
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
            placeholder="Discounted Price"
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="4"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        {/* Color Selection */}
        <div style={styles.filterSection}>
          <h3 className="font-semibold">COLOR</h3>
          <div>
            {["red", "black", "yellow", "white", "green", "blue", "pink", "purple", "brown", "orange", "gray", "magenta"].map((color) => (
              <div
                value={color}
                key={color}
                style={{
                  ...styles.colorBox,
                  backgroundColor: color,
                  borderColor: selectedColor === color ? "#333" : "transparent", // Highlight selected color
                }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Category, Subcategory, Sizes */}
        <div className="flex gap-4">
          {/* Category Dropdown */}
          <select
            value={category}
            onChange={handleCategoryChange}
            disabled={categoriesLoading || categoriesError}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              {categoriesLoading ? "Loading Categories..." : "Select Category"}
            </option>
            {categories &&
              categories.data.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>

          {/* Subcategory Dropdown */}
          <select
            value={subcategory}
            onChange={handleSubcategoryChange}
            // disabled={subcategoriesLoading || !category || subcategoriesError}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              {subcategoriesLoading ? "Loading Subcategories..." : "Select Subcategory"}
            </option>
            {subcategories &&
              subcategories.data.map((subcat) => (
                <option key={subcat.id} value={subcat.id}>
                  {subcat.name}
                </option>
              ))}
          </select>

          {/* Size Dropdown */}
          <Select
            options={sizeOptions}
            isMulti
            value={sizeOptions.filter((option) => selectedSizes.includes(option.value))}
            onChange={handleSizeChange}
            placeholder="Select Sizes"
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>


        {/* Add Product Button */}
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </div>

      <style jsx>{`
        .circular-progress {
          position: relative;
          width: 50px;
          height: 50px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  filterSection: { marginBottom: "30px" },

  colorBox: {
    display: "inline-block",
    width: "30px",
    height: "30px",
    margin: "5px",
    border: "2px solid transparent",
    cursor: "pointer",
  },
  colorSelected: {
    borderColor: "#333",
  },
};
export default RetailerAddProduct;
