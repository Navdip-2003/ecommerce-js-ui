import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RetailerProductDetail() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [productDetails, setProductDetails] = useState(state.product);
    const [image, setImage] = useState(null);
    const [productTitle, setProductTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discountedPrice, setDiscountedPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [size, setSize] = useState("");

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

    const handleCloseModal = () => {
        navigate("/retailer/product-list");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({ ...productDetails, [name]: value });
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

    const handleSaveChanges = () => {
        const updatedImages = [
            ...productDetails.image[0].url,
            ...newImages,
        ];
        const updatedProductDetails = {
            ...productDetails,
            image: [{ url: updatedImages }],
        };
        console.log("Updated Product Details:", updatedProductDetails);
        alert("Product updated successfully!");
        handleCloseModal();
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
                    <img src={productDetails.image} alt="Uploaded" className="w-full h-full object-cover" />
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
                    value={productDetails.name}
                    onChange={(e) => setProductTitle(e.target.value)}
                    placeholder="Product Title"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Price, Discounted Price, Quantity */}
                <div className="flex gap-4">
                    <input
                        type="number"
                        value={productDetails.price}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Price"
                        className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        value={productDetails.discountPrice}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Discounted Price"
                        className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        value={productDetails.stock}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Quantity"
                        className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Description */}
                <textarea
                    value={productDetails.description}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="Description"
                    rows="4"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>

                {/* Category, Subcategory, Sizes */}
                <div className="flex gap-4">
                    {/* Category */}
                    <select
                        value={productDetails.category}
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
                        value={productDetails.subcategories}
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
                        value={productDetails.sizes}
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
                    onClick={handleSaveChanges}
                    className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}

export default RetailerProductDetail;
