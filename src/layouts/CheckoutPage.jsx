import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cartItems, subtotal = 0 }) => {
    const navigate = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState("");
    const [cashOnDelivery, setCashOnDelivery] = useState(false);
    const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

    const userAddresses = [
        "123 Street, City, Country",
        "456 Avenue, Another City, Country",
        "789 Boulevard, Some City, Country",
    ];

    const handleOrderSuccess = () => {
        if (selectedAddress && cashOnDelivery) {
            setIsOrderSuccessful(true);
            setTimeout(() => {
                setIsOrderSuccessful(false);
                navigate("/"); // Redirect to homepage or orders page
            }, 2000);
        } else {
            alert("Please select an address and agree to Cash on Delivery.");
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f9f9f9" }}>
            {/* Header */}
            <h1 style={{ textAlign: 'center', margin: '20px 0 20px 0', fontSize: '25px' }}>CHECKOUT</h1>

            {/* Container */}
            <div
                style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                }}
            >
                {/* Address Section */}
                <h3 style={{ marginBottom: "10px", color: "#333" }}>Select Address : </h3>
                {userAddresses.map((address, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: "10px",
                            padding: "10px",
                            border: selectedAddress === address ? "2px solid #007bff" : "1px solid #ccc",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: selectedAddress === address ? "0px 0px 8px rgba(0, 123, 255, 0.3)" : "none",
                        }}
                        onClick={() => setSelectedAddress(address)}
                    >
                        <label style={{ cursor: "pointer" }}>
                            <input
                                type="radio"
                                value={address}
                                checked={selectedAddress === address}
                                onChange={() => setSelectedAddress(address)}
                                style={{ marginRight: "10px" }}
                            />
                            {address}
                        </label>
                    </div>
                ))}

                <h3 style={{ marginTop: "20px", color: "#333" }}>Payment Options : </h3>

                {/* Cash on Delivery Checkbox */}
                <div
                    style={{
                        margin: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >

                    <input
                        type="checkbox"
                        checked={cashOnDelivery}
                        onChange={() => setCashOnDelivery(!cashOnDelivery)}
                        style={{ transform: "scale(1.2)", cursor: "pointer" }}
                    />
                    <label style={{ fontSize: "16px", color: "#333", cursor: "pointer" }}>
                        Cash on Delivery
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleOrderSuccess}
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
                >
                    Place Order
                </button>
            </div>

            {/* Success Pop-Up */}
            {isOrderSuccessful && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        padding: "30px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                        textAlign: "center",
                        zIndex: 1000,
                    }}
                >
                    <h2 style={{ color: "green", marginBottom: "10px" }}>Order Successful!</h2>
                    <p>Your order has been placed successfully.</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
