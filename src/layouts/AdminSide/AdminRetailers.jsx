import React, { useState } from "react";

function AdminRetailers() {
    // Sample user data
    const [retailer, setRetailers] = useState([
        {
            id: 1,
            storeName: "John",
            retailerName: "Doe",
            phoneNo: "1234567890",
            status: "Active",
            profileImage: "https://via.placeholder.com/150",
            email: "john.doe@example.com",
            addresses: [
                { street: "123 Main St", city: "Cityville", state: "Stateville", pinCode: "12345" },
            ],
        },
        {
            id: 2,
            storeName: "Jane",
            retailerName: "Smith",
            phoneNo: "9876543210",
            status: "Inactive",
            profileImage: "https://via.placeholder.com/150",
            email: "jane.smith@example.com",
            addresses: [
                { street: "789 Another St", city: "Metropolis", state: "Stateville", pinCode: "54321" },
            ],
        },
    ]);

    const [selectedRetailer, setSelectedRetailer] = useState(null); // Holds data of the selected user
    const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal state

    const handleViewDetails = (retailer) => {
        setSelectedRetailer(retailer);
        setIsModalOpen(true);
    };

    const handleStatusChange = (status) => {
        setSelectedRetailer({ ...selectedRetailer, status });
    };

    const handleUpdateStatus = () => {
        setRetailers((prevRetailers) =>
            prevRetailers.map((retailer) =>
                retailer.id === selectedRetailer.id ? { ...retailer, status: selectedRetailer.status } : retailer
            )
        );
        setIsModalOpen(false);
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Retailer Management</h1>

            {/* User Table */}
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">No.</th>
                            <th className="px-6 py-3 text-left">ID</th>
                            <th className="px-6 py-3 text-left">First Name</th>
                            <th className="px-6 py-3 text-left">Last Name</th>
                            <th className="px-6 py-3 text-left">Phone No</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {retailer.map((retailer, index) => (
                            <tr
                                key={retailer.id}
                                className="hover:bg-gray-100 border-b border-gray-300"
                            >
                                <td className="px-6 py-4">{index + 1}</td> {/* Serial Number */}
                                <td className="px-6 py-4">{retailer.id}</td> {/* User ID */}
                                <td className="px-6 py-4">{retailer.storeName}</td>
                                <td className="px-6 py-4">{retailer.retailerName}</td>
                                <td className="px-6 py-4">{retailer.phoneNo}</td>
                                <td
                                    className={`px-6 py-4 font-semibold ${
                                        retailer.status === "Active" ? "text-green-500" : "text-red-500"
                                    }`}
                                >
                                    {retailer.status}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
                                        onClick={() => handleViewDetails(retailer)}
                                    >
                                        👁️ View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* User Details Modal */}
            {isModalOpen && selectedRetailer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-gray-700">Retailer Details</h2>
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={selectedRetailer.profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
                            />
                            <p className="mb-2 text-gray-600">
                                <strong>First Name:</strong> {selectedRetailer.firstName}
                            </p>
                            <p className="mb-2 text-gray-600">
                                <strong>Last Name:</strong> {selectedRetailer.lastName}
                            </p>
                            <p className="mb-2 text-gray-600">
                                <strong>Email:</strong> {selectedRetailer.email}
                            </p>
                            <p className="mb-4 text-gray-600">
                                <strong>Phone No:</strong> {selectedRetailer.phoneNo}
                            </p>
                            <div className="text-left w-full">
                                <strong className="block text-gray-600 mb-2">Addresses:</strong>
                                <ul className="list-disc list-inside space-y-1">
                                    {selectedRetailer.addresses.map((address, index) => (
                                        <li key={index} className="text-gray-600">
                                            {address.street}, {address.city}, {address.state} - {address.pinCode}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
                                value={selectedRetailer.status}
                                onChange={(e) => handleStatusChange(e.target.value)}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
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

export default AdminRetailers;
