import React, { useState } from "react";

function AdminUsers() {
    // Sample user data
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            phoneNo: "1234567890",
            status: "Active",
            profileImage: "https://via.placeholder.com/150",
            email: "john.doe@example.com",
            addresses: [
                { street: "123 Main St", city: "Cityville", state: "Stateville", pinCode: "12345" },
                { street: "456 Side St", city: "Townsville", state: "Regionville", pinCode: "67890" },
            ],
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            phoneNo: "9876543210",
            status: "Inactive",
            profileImage: "https://via.placeholder.com/150",
            email: "jane.smith@example.com",
            addresses: [
                { street: "789 Another St", city: "Metropolis", state: "Stateville", pinCode: "54321" },
            ],
        },
        {
            id: 3,
            firstName: "Alice",
            lastName: "Johnson",
            phoneNo: "5678901234",
            status: "Active",
            profileImage: "https://via.placeholder.com/150",
            email: "alice.johnson@example.com",
            addresses: [
                { street: "101 Example Rd", city: "Exampleton", state: "Stateville", pinCode: "11223" },
            ],
        },
    ]);

    const [selectedUser, setSelectedUser] = useState(null); // Holds data of the selected user
    const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal state

    const handleViewDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleStatusChange = (status) => {
        setSelectedUser({ ...selectedUser, status });
    };

    const handleUpdateStatus = () => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === selectedUser.id ? { ...user, status: selectedUser.status } : user
            )
        );
        setIsModalOpen(false);
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Management</h1>

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
                        {users.map((user, index) => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-100 border-b border-gray-300"
                            >
                                <td className="px-6 py-4">{index + 1}</td> {/* Serial Number */}
                                <td className="px-6 py-4">{user.id}</td> {/* User ID */}
                                <td className="px-6 py-4">{user.firstName}</td>
                                <td className="px-6 py-4">{user.lastName}</td>
                                <td className="px-6 py-4">{user.phoneNo}</td>
                                <td
                                    className={`px-6 py-4 font-semibold ${
                                        user.status === "Active" ? "text-green-500" : "text-red-500"
                                    }`}
                                >
                                    {user.status}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
                                        onClick={() => handleViewDetails(user)}
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
            {isModalOpen && selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-gray-700">User Details</h2>
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={selectedUser.profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
                            />
                            <p className="mb-2 text-gray-600">
                                <strong>First Name:</strong> {selectedUser.firstName}
                            </p>
                            <p className="mb-2 text-gray-600">
                                <strong>Last Name:</strong> {selectedUser.lastName}
                            </p>
                            <p className="mb-2 text-gray-600">
                                <strong>Email:</strong> {selectedUser.email}
                            </p>
                            <p className="mb-4 text-gray-600">
                                <strong>Phone No:</strong> {selectedUser.phoneNo}
                            </p>
                            <div className="text-left w-full">
                                <strong className="block text-gray-600 mb-2">Addresses:</strong>
                                <ul className="list-disc list-inside space-y-1">
                                    {selectedUser.addresses.map((address, index) => (
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
                                value={selectedUser.status}
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

export default AdminUsers;
