import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

function RetailerProductDetail() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [productDetails, setProductDetails] = useState(state.product);
    const [image, setImage] = useState(null); // Local state to handle image preview
    const [selectedColor, setSelectedColor] = useState(""); // Color selection state
    const [status, setStatus] = useState(productDetails.status || "Active"); // Status state

    useEffect(() => {
        // Set initial image if productDetails already have an image
        if (productDetails.image) {
            setImage(productDetails.image);
        }
    }, [productDetails]);

    const handleColorSelect = (e) => {
        setSelectedColor(e.target.value); // Update the selected color
    };

    const handleStatusSelect = (e) => {
        setStatus(e.target.value); // Update the selected status
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            status: e.target.value,
        }));
    };

    const handleCloseModal = () => {
        navigate("/retailer/product-list");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a URL for the uploaded image
            setImage(imageUrl); // Update the image preview
            setProductDetails((prevDetails) => ({
                ...prevDetails,
                image: imageUrl, // Update the productDetails with new image URL
            }));
        }
    };

    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(
                `http://localhost:8080/product/update/${productDetails.id}`, // Use product ID in URL
                productDetails, // Pass updated product details as the request body
                {
                    headers: {
                        "Content-Type": "application/json", // Set appropriate headers
                    },
                }
            );

            if (response.status === 200) {
                alert("Product updated successfully!");
                handleCloseModal(); // Navigate back to the product list
            } else {
                alert("Failed to update product. Please try again.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("An error occurred while updating the product.");
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
                <div>
                    <h4 className="font-semibold">Name</h4>
                    <input
                        type="text"
                        value={productDetails.name || ""}
                        onChange={(e) => handleInputChange(e)}
                        name="name"
                        placeholder="Product Title"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Price, Discounted Price, Quantity */}
                <div className="flex gap-4">
                    <div>
                        <h4 className="font-semibold">Actual Price</h4>
                        <input
                            type="number"
                            value={productDetails.actualPrice || ""}
                            onChange={(e) => handleInputChange(e)}
                            name="actualPrice"
                            placeholder="Price"
                            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold">Price</h4>
                        <input
                            type="number"
                            value={productDetails.price || ""}
                            onChange={(e) => handleInputChange(e)}
                            name="price"
                            placeholder="Discounted Price"
                            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold">Stocks</h4>
                        <input
                            type="number"
                            value={productDetails.stock || ""}
                            onChange={(e) => handleInputChange(e)}
                            name="stock"
                            placeholder="Quantity"
                            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h4 className="font-semibold">Description</h4>
                    <textarea
                        value={productDetails.description || ""}
                        onChange={(e) => handleInputChange(e)}
                        name="description"
                        placeholder="Description"
                        rows="4"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>
                {/* Color Dropdown */}
                <div>
                    <h4 className="font-semibold">Color</h4>
                    <select
                        value={productDetails.color || ""}
                        onChange={handleColorSelect}
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {["red", "black", "yellow", "white", "green", "blue", "pink", "purple", "brown", "orange", "gray", "magenta"].map((color) => (
                            <option key={color} value={color}>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Status Dropdown */}
                <div>
                    <h4 className="font-semibold">Status</h4>
                    <select
                        value={productDetails.status || ""}
                        onChange={handleStatusSelect}
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="INACTIVE">INACTIVE</option>
                    </select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handleSaveChanges}
                        className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Save Changes
                    </button>
                    <button
                        onClick={handleCloseModal}
                        className="bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RetailerProductDetail;
