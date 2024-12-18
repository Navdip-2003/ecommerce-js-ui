import React, { useState } from "react";
import Cookies from 'js-cookie';

function AdminProfile() {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({ password: "", confirmPassword: "" });

    let userData = null;
        try {
            const userDataCookie = Cookies.get('userData'); // Fetch from cookie
            if (userDataCookie) {
                userData = JSON.parse(userDataCookie); // Parse JSON string
            }
        } catch (error) {
            console.error("Failed to parse userData from cookie:", error);
        }
    

    const handleProfileChange = (e) => {
        setFormData({ ...userData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = () => {
        setAdminData(userData);
        setShowProfileModal(false);
    };

    const handleUpdatePassword = () => {
        if (passwordData.password === passwordData.confirmPassword) {
            alert("Password updated successfully!");
            setShowPasswordModal(false);
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Profile</h1>

            {/* Admin Details */}
            <div style={styles.profileDetails}>
                <p><strong>Name:</strong> {userData.firstName}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.mobileNumber}</p>
            </div>

            {/* Buttons */}
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => setShowProfileModal(true)}>
                    Update Profile
                </button>
                <button style={styles.button} onClick={() => setShowPasswordModal(true)}>
                    Update Password
                </button>
            </div>

            {/* Update Profile Modal */}
            {showProfileModal && (
                <div style={styles.modal}>
                    <h2>Update Profile</h2>
                    <input
                        style={styles.input}
                        type="text"
                        name="name"
                        value={userData.firstName}
                        onChange={handleProfileChange}
                        placeholder="Name"
                    />
                    <input
                        style={styles.input}
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleProfileChange}
                        placeholder="Email"
                    />
                    <input
                        style={styles.input}
                        type="tel"
                        name="phone"
                        value={userData.mobileNumber}
                        onChange={handleProfileChange}
                        placeholder="Phone"
                    />
                    <button style={styles.saveButton} onClick={handleUpdateProfile}>
                        Save
                    </button>
                    <button style={styles.cancelButton} onClick={() => setShowProfileModal(false)}>
                        Cancel
                    </button>
                </div>
            )}

            {/* Update Password Modal */}
            {showPasswordModal && (
                <div style={styles.modal}>
                    <h2>Update Password</h2>
                    <input
                        style={styles.input}
                        type="password"
                        name="password"
                        value={passwordData.password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                    />
                    <input
                        style={styles.input}
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        placeholder="Confirm Password"
                    />
                    <button style={styles.saveButton} onClick={handleUpdatePassword}>
                        Save
                    </button>
                    <button style={styles.cancelButton} onClick={() => setShowPasswordModal(false)}>
                        Cancel
                    </button>
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
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    profileDetails: {
        marginBottom: "20px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "400px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
    },
    saveButton: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginRight: "10px",
    },
    cancelButton: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default AdminProfile;
