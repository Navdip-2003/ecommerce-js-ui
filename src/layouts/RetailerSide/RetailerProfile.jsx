import React, { useState } from 'react';
import defaultProfile from '../../assets/images/profile-user.png';

function RetailerProfile() {
    const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit modes
    const [profile, setProfile] = useState({
        shopLogo: defaultProfile, // Placeholder image for shop logo
        storeName: "GD Store",
        retailerName: "Dhyey Gorasiya",
        address: "A-202 Omkar residency, surat.",
        email: "dhyeygorasiya@gmail.com",
        phone: "9023150639",
    });
    
    const [newProfileImage, setNewProfileImage] = useState(null); // State to hold the new profile image

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate image format (only jpg or png)
            const fileType = file.type.split("/")[1];
            if (fileType === "jpeg" || fileType === "png") {
                // Validate image size (less than 2MB)
                if (file.size <= 2 * 1024 * 1024) {
                    // Create a URL for the selected image
                    setNewProfileImage(URL.createObjectURL(file));
                } else {
                    alert("Image size must be less than 2MB.");
                }
            } else {
                alert("Only JPG and PNG formats are allowed.");
            }
        }
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // If a new profile image is selected, update the profile image
        const updatedProfile = { ...profile, shopLogo: newProfileImage || profile.shopLogo };
        setProfile(updatedProfile);
        setIsEditing(false);
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 style={styles.header}>Retailer Profile</h1>

            <div style={styles.profileContainer}>
                {/* Display Profile Information */}
                {!isEditing ? (
                    <>
                        <div style={styles.logoContainer}>
                            <img
                                src={profile.shopLogo}
                                alt="Shop Logo"
                                style={styles.shopLogo}
                            />
                        </div>

                        <div style={styles.detailsContainer}>
                            <div style={styles.profileInfo}>
                                <div style={styles.profileField}><strong>Store Name : </strong> {profile.storeName}</div>
                                <div style={styles.profileField}><strong>Retailer Name : </strong> {profile.retailerName}</div>
                                <div style={styles.profileField}><strong>Address : </strong> {profile.address}</div>
                                <div style={styles.profileField}><strong>Email : </strong> {profile.email}</div>
                                <div style={styles.profileField}><strong>Phone No : </strong> {profile.phone}</div>
                            </div>

                            <button onClick={() => setIsEditing(true)} style={styles.button}>Update Profile</button>
                        </div>
                    </>
                ) : (
                    <div style={styles.detailsContainer}>
                        {/* Profile Update Form */}
                        <form onSubmit={handleUpdateProfile}>
                            <div style={styles.logoContainer}>
                                <img
                                    src={newProfileImage || profile.shopLogo}
                                    alt="Shop Logo"
                                    style={styles.shopLogo}
                                />
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleProfileImageChange}
                                    style={styles.fileInput}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Store Name:</label>
                                <input
                                    type="text"
                                    name="storeName"
                                    value={profile.storeName}
                                    onChange={handleProfileChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Retailer Name:</label>
                                <input
                                    type="text"
                                    name="retailerName"
                                    value={profile.retailerName}
                                    onChange={handleProfileChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Address:</label>
                                <textarea
                                    name="address"
                                    value={profile.address}
                                    onChange={handleProfileChange}
                                    style={{ ...styles.inputField, height: '80px' }}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Phone No:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleProfileChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.buttonsContainer}>
                                <button type="submit" style={styles.button}>Save Changes</button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    style={styles.button}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
    },
    header: {
        textAlign: "center",
        marginBottom: "30px",
        color: "#333",
        fontSize: '25px',
    },
    profileContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logoContainer: {
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    shopLogo: {
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        objectFit: "cover",
    },
    fileInput: {
        marginTop: "10px",
        padding: "8px",
        fontSize: "14px",
    },
    detailsContainer: {
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    profileInfo: {
        marginBottom: "20px",
    },
    profileField: {
        marginBottom: "10px",
        fontSize: "16px",
    },
    inputField: {
        width: "100%",
        padding: "8px",
        marginTop: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "14px",
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    },
};

export default RetailerProfile;
