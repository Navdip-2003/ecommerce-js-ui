import React, { useState } from "react";

const RetailerAddProduct = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const categoryData = {
    men: {
      subcategories: ["T-Shirt", "Shirt", "Jeans"],
      sizes: {
        "T-Shirt": ["S", "M", "L", "XL"],
        Shirt: ["S", "M", "L", "XL"],
        Jeans: ["28", "30", "32", "34", "36"],
      },
    },
    women: {
      subcategories: ["Dress", "Blouse", "Skirt"],
      sizes: {
        Dress: ["XS", "S", "M", "L", "XL"],
        Blouse: ["XS", "S", "M", "L"],
        Skirt: ["S", "M", "L", "XL"],
      },
    },
    kids: {
      subcategories: ["Shirt", "Pants", "Shorts"],
      sizes: {
        Shirt: ["2T", "3T", "4T", "5T"],
        Pants: ["2T", "3T", "4T", "5T"],
        Shorts: ["2T", "3T", "4T"],
      },
    },
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubcategory("");
    setSize("");
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
    setSize("");
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAddProduct = () => {
    const productDetails = `
      Product Title: ${productTitle}
      Price: ${price}
      Discounted Price: ${discountedPrice}
      Quantity: ${quantity}
      Description: ${description}
      Category: ${category}
      Subcategory: ${subcategory}
      Size: ${size}
    `;
    alert(productDetails);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Image Upload Section */}
      <div
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 w-full lg:w-1/3 cursor-pointer bg-white"
        style={{ height: "500px" }}
        onClick={() => document.getElementById("imageUpload").click()}
      >
        {image ? (
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

        {/* Category, Subcategory, Sizes */}
        <div className="flex gap-4">
          {/* Category */}
          <select
            value={category}
            onChange={handleCategoryChange}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select Category
            </option>
            {Object.keys(categoryData).map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          {/* Subcategory */}
          <select
            value={subcategory}
            onChange={handleSubcategoryChange}
            disabled={!category}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select Subcategory
            </option>
            {category &&
              categoryData[category].subcategories.map((subcat) => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
          </select>

          {/* Sizes */}
          <select
            value={size}
            onChange={handleSizeChange}
            disabled={!subcategory}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select Size
            </option>
            {subcategory &&
              categoryData[category].sizes[subcategory].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </select>
        </div>

        {/* Add Product Button */}
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default RetailerAddProduct;
