import React, { useState } from 'react';
import Cookies from 'js-cookie';
import defaultProfile from '../../assets/images/profile-user.png';

function RetailerProfile() {
    const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit modes
    const [profile, setProfile] = useState({
        shopLogo: defaultProfile, // Placeholder image for shop logo
    });

    const [errorMessage, setErrorMessage] = useState(''); // For displaying validation errors
    const [newProfileImage, setNewProfileImage] = useState(null);

    let userData = null;
    try {
        const userDataCookie = Cookies.get('userData'); // Fetch from cookie
        if (userDataCookie) {
            userData = JSON.parse(userDataCookie); // Parse JSON string
        }
    } catch (error) {
        console.error("Failed to parse userData from cookie:", error);
    }

    // Extract first address or fallback to an empty object
    const firstAddress = (userData?.address && userData.address[0]) || {
        type: '',
        street: '',
        city: '',
        state: '',
        pinCode: '',
    };

    const [formData, setFormData] = useState({
        storeName: userData?.storeName || '',
        retailerName: userData?.firstName || '',
        email: userData?.email || '',
        phone: userData?.mobileNumber || '',
        address: { ...firstAddress }, // Initialize with the first address
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            address: {
                ...prevState.address,
                [name]: value,
            },
        }));
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[1];
            if (fileType === 'jpeg' || fileType === 'png') {
                if (file.size <= 2 * 1024 * 1024) {
                    setNewProfileImage(URL.createObjectURL(file)); // Set preview image
                    setErrorMessage(''); // Clear error message
                } else {
                    setErrorMessage('Image size must be less than 2MB.');
                }
            } else {
                setErrorMessage('Only JPG and PNG formats are allowed.');
            }
        }
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            const updatedProfile = {
                ...profile,
                shopLogo: newProfileImage || profile.shopLogo,
            };
            setProfile(updatedProfile);
            setIsEditing(false);
        }
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
                                <div style={styles.profileField}><strong>Store Name: </strong>{userData?.storeName || 'N/A'}</div>
                                <div style={styles.profileField}><strong>Retailer Name: </strong>{userData?.firstName}</div>
                                <div style={styles.profileField}>
                                    <strong>Address: </strong>
                                    {`${firstAddress.street}, ${firstAddress.city}, ${firstAddress.state} - ${firstAddress.pinCode}`}
                                </div>
                                <div style={styles.profileField}><strong>Email: </strong>{userData?.email}</div>
                                <div style={styles.profileField}><strong>Phone No: </strong>{userData?.mobileNumber}</div>
                            </div>

                            <button onClick={() => setIsEditing(true)} style={styles.button}>
                                Update Profile
                            </button>
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
                                {errorMessage && (
                                    <p style={styles.errorText}>{errorMessage}</p>
                                )}
                            </div>

                            <div style={styles.profileField}>
                                <label>Store Name:</label>
                                <input
                                    type="text"
                                    name="storeName"
                                    value={formData.storeName}
                                    onChange={handleInputChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Retailer Name:</label>
                                <input
                                    type="text"
                                    name="retailerName"
                                    value={formData.retailerName}
                                    onChange={handleInputChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Street:</label>
                                <input
                                    type="text"
                                    name="street"
                                    value={formData.address.street}
                                    onChange={handleAddressChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>City:</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.address.city}
                                    onChange={handleAddressChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>State:</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.address.state}
                                    onChange={handleAddressChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Pin Code:</label>
                                <input
                                    type="text"
                                    name="pinCode"
                                    value={formData.address.pinCode}
                                    onChange={handleAddressChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={styles.inputField}
                                />
                            </div>

                            <div style={styles.profileField}>
                                <label>Phone No:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
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
}

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
        fontSize: "25px",
    },
    profileContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logoContainer: {
        marginBottom: "20px",
    },
    shopLogo: {
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        objectFit: "cover",
    },
    fileInput: {
        marginTop: "10px",
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
    },
    addressContainer: {
        marginBottom: "15px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
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
    errorText: {
        color: "red",
        marginTop: "10px",
        fontSize: "14px",
    },
};

export default RetailerProfile;
