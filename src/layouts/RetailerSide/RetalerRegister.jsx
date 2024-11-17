import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RetailerRegister() {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-xl mx-auto m-12 p-6 border rounded rounded-5 shadow-xl bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Retailer Register</h2>
            <form>
                {/* Profile photo upload button */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <label htmlFor="photoUpload" style={{ cursor: "pointer" }}>
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                backgroundColor: "#f0f0f0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                margin: "0 auto",
                                border: "2px solid #ddd"
                            }}
                        >
                            {photo ? (
                                <img
                                    src={photo}
                                    alt="Uploaded"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                <span style={{ color: "#888" }}>Add Store Image</span>
                            )}
                        </div>
                    </label>
                    <input
                        type="file"
                        id="photoUpload"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </div>


                {/* Store Name and Retailer Name fields */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Store Name</label>
                        <input
                            type="text"
                            id="storeName"
                            placeholder="Store Name"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Retailer Name</label>
                        <input
                            type="text"
                            id="retailerName"
                            placeholder="Retailer Name"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                </div>

                {/* Email field */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ex : shivaycloths@gmail.com"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                </div>

                {/* Mobile Number field */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Mobile Number</label>
                        <input
                            type="number"
                            id="mobile"
                            placeholder="Ex : 9023150639"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                </div>

                {/* Store Address field */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Store Address</label>
                        <textarea
                            id="address"
                            placeholder="Store Address"
                            style={{
                                width: "100%",
                                height: "100px",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        ></textarea>
                    </div>
                </div>

                {/* Password and Confirm Password fields */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ex : Shivay@123"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Ex : Shivay@123"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "10px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Register
                </button>
            </form>

            {/* Login link */}
            <p className="text-center mt-4 text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
}

export default RetailerRegister;
