import React, { useState } from "react";
import defaultProfile from '../assets/images/profile-user.png';

const UserProfile = () => {
    const defaultProfilePhoto = defaultProfile;
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [user, setUser] = useState({
        firstName: "Dhyey",
        lastName: "Gorasiya",
        email: "dhyeygorasiya@gmail.com",
        phone: "9023150639",
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

    const [orderList, setOrderList] = useState([
        {
            orderId: "ORD123456",
            products: [
                { name: "T-Shirt", quantity: 2 },
                { name: "Jeans", quantity: 1 },
            ],
            totalAmount: "1500",
            shippingAddress: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
            billingAddress: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
            orderDate: "2024-10-01",
            deliveryDate: "2024-10-05",
            status: "Completed"
        },
        {
            orderId: "ORD123457",
            products: [
                { name: "Jacket", quantity: 1 },
                { name: "Cap", quantity: 2 },
            ],
            totalAmount: "2000",
            shippingAddress: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
            billingAddress: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
            orderDate: "2024-10-10",
            deliveryDate: "2024-10-15",
            status: "Pending"
        },
    ]);

    const handleProfileChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleProfilePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUser({ ...user, profilePhoto: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddressChange = (e) => {
        setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
    };

    const handleAddAddress = () => {
        setAddressList([...addressList, newAddress]);
        setNewAddress({ houseNo: "", society: "", area: "", city: "", state: "", pincode: "" });
        setIsAddingAddress(false);
    };

    const handleDeleteAddress = (index) => {
        const updatedAddresses = addressList.filter((_, i) => i !== index);
        setAddressList(updatedAddresses);
    };

    return (
        <div style={{ display: "flex", padding: "20px", justifyContent: "space-between" }}>
            {/* Left Sidebar for User Info */}
            <div style={{ width: "30%", padding: "20px", borderRight: "1px solid #ccc" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <img
                        src={user.profilePhoto || defaultProfilePhoto}
                        alt="Profile"
                        style={{ borderRadius: "50%", width: "200px", height: "200px", marginBottom: "20px", justifySelf: "center" }}
                    />
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button
                        onClick={() => setIsEditingProfile(!isEditingProfile)}
                        style={{ padding: "8px 16px", backgroundColor: "#007BFF", color : "white", border: "none", borderRadius: "4px", marginTop: "20px", cursor: "pointer" }}
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
                {isEditingProfile  && (
                    <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h4 className="text-xl font-bold mb-6 text-center" style={{ textAlign: "center" }}>Edit User Details</h4>
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
                        <input type="text" name="firstName" value={user.firstName} onChange={handleProfileChange} placeholder="First Name" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="lastName" value={user.lastName} onChange={handleProfileChange} placeholder="Last Name" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="email" name="email" value={user.email} onChange={handleProfileChange} placeholder="Email" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="phone" value={user.phone} onChange={handleProfileChange} placeholder="Phone" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button
                            onClick={setIsEditingProfile}
                            style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            Edit Profile
                        </button>
                    </div>
                )}
                {isEditingPassword  && (
                    <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h4 className="text-xl font-bold mb-6 text-center" style={{ textAlign: "center" }}>Change Password</h4>
                        <input type="text" name="newPassword" onChange={handleProfileChange} placeholder="New Password" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="confirmPassword" onChange={handleProfileChange} placeholder="Confirm Password" style={{ padding: "10px", width: "100%", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button
                            onClick={setIsEditingPassword}
                            style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            Change Password
                        </button>
                    </div>
                )}
            </div>

            {/* Middle Section for Addresses */}
            <div style={{ width: "40%", padding: "20px", borderRight: "1px solid #ccc" }}>
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ textAlign: "center", marginBottom: "20px" }}>Addresses</h2>
                {addressList.map((address, index) => (
                    <div key={index} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "10px", backgroundColor: "#f1f1f1" }}>
                        <p><strong>House No :</strong> {address.houseNo}</p>
                        <p><strong>Society :</strong> {address.society}</p>
                        <p><strong>Area :</strong> {address.area}</p>
                        <p><strong>City :</strong> {address.city}</p>
                        <p><strong>State :</strong> {address.state}</p>
                        <p><strong>Pincode :</strong> {address.pincode}</p>
                        <button
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
                    onClick={() => setIsAddingAddress(!isAddingAddress)}
                    style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}
                >
                    {isAddingAddress ? "Cancel" : "Add Address"}
                </button>

                {isAddingAddress && (
                    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                        <h4 className="text-xl font-bold mb-6 text-center" style={{ textAlign: "center" }}>Add New Address</h4>
                        <input type="text" name="houseNo" value={newAddress.houseNo} onChange={handleAddressChange} placeholder="House No." style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="society" value={newAddress.society} onChange={handleAddressChange} placeholder="Society" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="area" value={newAddress.area} onChange={handleAddressChange} placeholder="Area" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="city" value={newAddress.city} onChange={handleAddressChange} placeholder="City" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="state" value={newAddress.state} onChange={handleAddressChange} placeholder="State" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="text" name="pincode" value={newAddress.pincode} onChange={handleAddressChange} placeholder="Pincode" style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button
                            onClick={handleAddAddress}
                            style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            Add Address
                        </button>
                    </div>
                )}
            </div>

            {/* Right Sidebar for Orders */}
            <div style={{ width: "30%", padding: "20px" }}>
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ textAlign: "center", marginBottom: "20px" }}>Past Orders</h2>
                {orderList.map((order, index) => (
                    <div key={index} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "10px", backgroundColor: "#f1f1f1" }}>
                        <p><strong>Order ID :</strong> {order.orderId}</p>
                        <p><strong>Products :</strong> {order.products.map((product) => `${product.name} x ${product.quantity}`).join(", ")}</p>
                        <p><strong>Total Amount :</strong> ₹{order.totalAmount}</p>
                        <p><strong>Shipping Address :</strong> {order.shippingAddress}</p>
                        <p><strong>Billing Address :</strong> {order.billingAddress}</p>
                        <p><strong>Order Date :</strong> {order.orderDate}</p>
                        <p><strong>Delivery Date :</strong> {order.deliveryDate}</p>
                        <p>
                            <strong>Status :</strong>{' '}
                            <span style={{ color: order.status === "Completed" ? "green" : "red" }}>
                                {order.status}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
