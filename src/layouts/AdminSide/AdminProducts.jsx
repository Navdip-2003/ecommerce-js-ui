import React, { useState, useEffect } from "react";

function AdminProducts() {
    const [product, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample data for products
    useEffect(() => {
        // Fetch data from API
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:8080/product`);
                const json = await response.json();

                if (json.success && json.data && Array.isArray(json.data.products)) {
                    setProducts(json.data.products); // Access products array
                } else {
                    console.error("Unexpected API response structure:", json);
                    setError("Invalid data format received from server.");
                }
            } catch (err) {
                setError("Failed to fetch products. Please try again.");
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleStatusChange = (status) => {
        setSelectedProduct({ ...selectedProduct, status });
    };

    const handleUpdateStatus = async () => {
        try {
            // Construct the API URL with query parameters
            const apiUrl = `http://localhost:8080/product/status?Id=${selectedProduct.id}&status=${selectedProduct.status}`;

            // Make the API call
            const response = await fetch(apiUrl, {
                method: "PUT", // Use "PUT" or "POST" based on your API's requirements
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            // Log response data for debugging
            console.log('API Response:', data);

            if (response.ok && data.success) {
                // Update the local user list
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product.id === selectedProduct.id ? { ...product, status: selectedProduct.status } : product
                    )
                );
                setIsModalOpen(false); // Close the modal
                alert("Status updated successfully!");
            } else {
                // Log error data if status is not 'success'
                console.error("Failed to update status:", data.message);
                alert(`Failed to update status: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            // Log the error to the console
            console.error("Error updating status:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Product Management</h1>

            {/* Product Table */}
            <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">No.</th>
                        <th className="px-6 py-3 text-left">Product Name</th>
                        <th className="px-6 py-3 text-left">Price</th>
                        <th className="px-6 py-3 text-left">Retailer ID</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product, index) => (
                        <tr key={product.id} className="hover:bg-gray-100 border-b border-gray-300">
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{product.name}</td>
                            <td className="px-6 py-4">₹{product.price}</td>
                            <td className="px-6 py-4">{product.retailerId}</td>
                            <td
                                className={`px-6 py-4 font-semibold ${product.status === "ACTIVE" ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {product.status}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button
                                    className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
                                    onClick={() => handleViewDetails(product)}
                                >
                                    👁️ View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Product Details Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-gray-700">Product Details</h2>
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={selectedProduct.image}
                                alt="image"
                                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col items-left mb-6">
                            <p className="mb-2 text-gray-600">
                                <strong>ID:</strong> {selectedProduct.id}
                            </p>
                            <p className="mb-2 text-gray-600">
                                <strong>Product Name:</strong> {selectedProduct.name}
                            </p>
                            <p className="mb-2 text-gray-600">
                                <strong>Price:</strong> {selectedProduct.price}
                            </p>
                            <p className="mb-4 text-gray-600">
                                <strong>Description:</strong> {selectedProduct.description}
                            </p>
                            <p className="mb-4 text-gray-600">
                                <strong>Color:</strong> {selectedProduct.color}
                            </p>
                            <p className="mb-4 text-gray-600">
                                <strong>Sizes:</strong> {selectedProduct.size}
                            </p>
                            <p className="mb-4 text-gray-600">
                                <strong>Retailer ID:</strong> {selectedProduct.retailerId}
                            </p>

                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="status"
                                className="block text-gray-600 font-bold mb-2"
                            >
                                Update Status:
                            </label>
                            <select
                                id="status"
                                className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                value={selectedProduct.status}
                                onChange={(e) => handleStatusChange(e.target.value)}
                            >
                                <option value="ACTIVE">ACTIVE</option>
                                <option value="INACTIVE">INACTIVE</option>
                            </select>
                        </div>
                        <button
                            className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
                            onClick={handleUpdateStatus}
                        >
                            Update Status
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
    },
};

export default AdminProducts;
