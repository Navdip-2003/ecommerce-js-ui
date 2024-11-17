import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    return (
        <div className="max-w-xl mx-auto m-12 p-6 border rounded rounded-5 shadow-xl bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form>
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
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
                        <label>Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
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

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Gender</label>
                        <select
                            id="gender"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        >
                            <option disabled selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
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

            {/* Registration page link */}
            <p className="text-center mt-4 text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>

            <p className="text-center mt-4 text-gray-600">OR</p>

            <p className="text-center mt-4 text-gray-600">
                Do you want to be a Reatailer?{' '}
                <Link to="/retailer-register" className="text-blue-500 hover:underline">
                    Register
                </Link>
            </p>
        </div>

    );
}

export default Register;