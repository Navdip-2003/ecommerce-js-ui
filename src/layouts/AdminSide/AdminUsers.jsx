import React, { useState, useEffect } from "react";

import defaultProfile from '../../assets/images/profile-user.png';

function AdminUsers() {
    // Sample user data
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // Holds data of the selected user
    const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal state

    useEffect(() => {
        // Fetch data from API
        const fetchUsers = async () => {
            try {
                const response = await fetch(`http://localhost:8080/user/all?type=U`);
                const json = await response.json();

                if (json.success && json.data && Array.isArray(json.data)) {
                    setUsers(json.data); // Access products array
                } else {
                    console.error("Unexpected API response structure:", json);
                    setError("Invalid data format received from server.");
                }
            } catch (err) {
                setError("Failed to fetch Users. Please try again.");
                console.error("Error fetching users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleViewDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleStatusChange = (status) => {
        setSelectedUser({ ...selectedUser, status });
    };

    const handleUpdateStatus = async () => {
        try {
            // Construct the API URL with query parameters
            const apiUrl = `http://localhost:8080/user/status?Id=${selectedUser.id}&status=${selectedUser.status}`;

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
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === selectedUser.id ? { ...user, status: selectedUser.status } : user
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
                                <td className="px-6 py-4">{user.mobileNumber}</td>
                                <td
                                    className={`px-6 py-4 font-semibold ${user.status === "active" ? "text-green-500" : user.status === "deleted" ? "text-red-500" : user.status === "inactive" ? "text-blue-500" : "text-gray-500"
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
                                src={selectedUser.profileImage || defaultProfile}
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
                                <strong>Phone No:</strong> {selectedUser.mobileNumber}
                            </p>
                            <div className="text-left w-full">
                                <strong className="block text-gray-600 mb-2">Addresse:</strong>
                                <ul className="list-disc list-inside space-y-1">
                                    {selectedUser.address && Array.isArray(selectedUser.address) && selectedUser.address.length > 0 ? (
                                        selectedUser.address.map((addr, index) => (
                                            <div key={index} className="text-gray-600">
                                                <strong>Type:</strong> {addr.type} <br />
                                                <strong>Street:</strong> {addr.street} <br />
                                                <strong>City:</strong> {addr.city}<br />
                                                <strong>State:</strong> {addr.state}<br />
                                                <strong>Pin Code:</strong> {addr.pinCode}
                                            </div>
                                        ))
                                    ) : (
                                        <li className="text-gray-600">No addresses available.</li>
                                    )}
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
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                                <option value="deleted">Deleted</option>
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
