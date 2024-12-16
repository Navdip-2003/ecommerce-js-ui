import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import defaultProfile from '../assets/images/profile-user.png';

const UserProfile = () => {
    const defaultProfilePhoto = defaultProfile;
    const navigate = useNavigate();
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [user, setUser ] = useState({
        profilePhoto: defaultProfilePhoto,
    });

    const [addressList, setAddressList] = useState([
        { houseNo: "D-64", society: "Greenwood Society", area: "Sola Bridge", city: "Ahmedabad", state: "Gujarat", pincode: "380061" },
    ]);

    const [newAddress, setNewAddress] = useState({
        houseNo: "",
        society: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
    });

    const [editingAddressIndex, setEditingAddressIndex] = useState(null); // Track which address is being edited
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleProfileChange = (e) => {
        setUser ({ ...user, [e.target.name]: e.target.value });
    };

    const handleProfilePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const fileSize = file.size;

            // Check file type and size
            if (!['image/jpeg', 'image/png'].includes(fileType)) {
                setErrorMessage("Please upload a JPG or PNG image.");
                return;
            }
            if (fileSize > 2 * 1024 * 1024) { // 2MB in bytes
                setErrorMessage("File size must be less than 2MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                setUser  ({ ...user, profilePhoto: reader.result });
                setErrorMessage(""); // Clear error message on successful upload
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddressChange = (e) => {
        setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
    };

    const handleAddAddress = () => {
        if (editingAddressIndex !== null) {
            // Update existing address
            const updatedAddresses = addressList.map((address, index) =>
                index === editingAddressIndex ? newAddress : address
            );
            setAddressList(updatedAddresses);
            setEditingAddressIndex(null); // Reset editing index
        } else {
            // Add new address
            setAddressList([...addressList, newAddress]);
        }
        // Reset newAddress state and close the form
        setNewAddress({ houseNo: "", society: "", area: "", city: "", state: "", pincode: "" });
        setIsAddingAddress(false);
    };

    const handleEditAddress = (index) => {
        setNewAddress(addressList[index]); // Set the newAddress state with the selected address
        setEditingAddressIndex(index); // Set the index of the address being edited
        setIsAddingAddress(true); // Open the add address form
    };

    const handleDeleteAddress = (index) => {
        const updatedAddresses = addressList.filter((_, i) => i !== index);
        setAddressList(updatedAddresses);
    };

    const handleAddNewAddressClick = () => {
        setNewAddress({ houseNo: "", society: "", area: "", city: "", state: "", pincode: "" }); // Reset the newAddress state
        setEditingAddressIndex(null); // Reset editing index
        setIsAddingAddress(true); // Open the add address form
    };

    const handleCloseAddressForm = () => {
        setNewAddress({ houseNo: "", society: "", area: "", city: "", state: "", pincode: "" }); // Reset the newAddress state
        setEditingAddressIndex(null); // Reset editing index
        setIsAddingAddress(false); // Close the add address form
    };

    return (
        <div style={{ display: "flex", padding: "20px", justifyContent: "space-between" }}>
            {/* Left Sidebar for User Info */}
            <div style={{ width: "40%", padding: "20px", borderRight: "1px solid #ccc" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <img
                        src={user.profilePhoto}
                        alt ="Profile"
                        style={{ borderRadius: "50%", width: "200px", height: "200px", marginBottom: "20px", justifySelf: "center" }}
                    />
                    <h3>Dhyey Gorasiya</h3>
                    <p>dhyeygorasiya@gmail.com</p>
                    <p>9023150639</p>
                    <button
                        onClick={() => setIsEditingProfile(!isEditingProfile)}
                        style={{ padding: "8px 16px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", marginTop: "20px", cursor: "pointer" }}
                    >
                        {isEditingProfile ? "Close" : "Edit Profile"}
                    </button>
                    <button
                        onClick={() => setIsEditingPassword(!isEditingPassword)}
                        style={{ padding: "8px 16px", backgroundColor: "#FF0000", color: "white", border: "none", borderRadius: "4px", margin: "20px 0 0 20px", cursor: "pointer" }}
                    >
                        {isEditingPassword ? "Close" : "Change Password"}
                    </button>
                </div>
                {isEditingProfile && (
                    <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h4 className="text-xl font-bold mb-6 text-center">Edit User Details</h4>
                        <label
                            htmlFor="profilePhoto"
                            style={{
                                display: "inline-block",
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                backgroundColor: "#ddd",
                                color: "#007BFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "24px",
                                cursor: "pointer",
                                margin: "10px auto",
                            }}
                        >
                            +
                            <input
                                id="profilePhoto"
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePhotoChange}
                                style={{ display: "none" }}
                            />
                        </label>
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        <input type="text" name="firstName" value="Dhyey" onChange={handleProfileChange} placeholder="First Name" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="lastName" value="Gorasiya" onChange={handleProfileChange} placeholder="Last Name" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="email" name="email" value="dhyeygorasiya@gmail.com" onChange={handleProfileChange} placeholder="Email" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="phone" value="9023150639" onChange={handleProfileChange} placeholder="Phone" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button
                            onClick={() => setIsEditingProfile(false)}
                            style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            Save Changes
                        </button>
                    </div>
                )}
                {isEditingPassword && (
                    <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h4 className="text-xl font-bold mb-6 text-center">Change Password</h4>
                        <input type="password" name="newPassword" onChange={handleProfileChange} placeholder="New Password" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="password" name="confirmPassword" onChange={handleProfileChange} placeholder="Confirm Password" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button
                            onClick={() => setIsEditingPassword(false)}
                            style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            Change Password
                        </button>
                    </div>
                )}
            </div>

            {/* Middle Section for Addresses */}
            <div style={{ width: "60%", padding: "20px" }}>
                <h2 className="text-2xl font-bold mb-6 text-center">Addresses</h2>
                {addressList.map((address, index) => (
                    <div key={index} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "10px", backgroundColor: "#f1f1f1" }}>
                        <p><strong>House No :</strong> {address.houseNo}</p>
                        <p><strong>Society :</strong> {address.society}</p>
                        <p><strong>Area :</strong> {address.area}</p>
                        <p><strong>City :</strong> {address.city}</p>
                        <p><strong>State :</strong> {address.state}</p>
                        <p><strong>Pincode :</strong> {address.pincode}</p>
                        <button
                            onClick={() => handleEditAddress(index)}
                            style={{ padding: "8px 16px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", margin: "10px 10px 0 0", cursor: "pointer" }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteAddress(index)}
                            style={{ padding: "8px 16px", backgroundColor: "#FF0000", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                        >
                            Delete
                        </button>
                    </div>
                ))}

                <button
                    onClick={isAddingAddress || editingAddressIndex !== null ? handleCloseAddressForm : handleAddNewAddressClick}
                    style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}
                >
                    {isAddingAddress || editingAddressIndex !== null ? "Close" : "Add Address"}
                </button>

                {isAddingAddress && (
                    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h4 className="text-xl font-bold mb-6 text-center">Add New Address</h4>
                        <input type="text" name="houseNo" value={newAddress.houseNo} onChange={handleAddressChange} placeholder="House No." style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="society" value={newAddress.society} onChange={handleAddressChange} placeholder="Society" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="area" value={newAddress.area} onChange={handleAddressChange} placeholder="Area" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="city" value={newAddress.city} onChange={handleAddressChange} placeholder="City" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="state" value={newAddress.state} onChange={handleAddressChange} placeholder=" State" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="pincode" value={newAddress.pincode} onChange={handleAddressChange} placeholder="Pincode" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button
                            onClick={handleAddAddress}
                            style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            {editingAddressIndex !== null ? "Update Address" : "Add Address"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;