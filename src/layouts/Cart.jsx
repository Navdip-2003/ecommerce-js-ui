import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";

const CartPage = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Edna Dress',
            imageUrl: product1,
            discountPrice: 600,
            actualPrice: 500,
            quantity: 1,
            description:
                'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            color: "Navy",
            size: "Small",
        },
        {
            id: 2,
            name: 'Elastic Waist Dress',
            imageUrl: product2,
            discountPrice: 748,
            actualPrice: 948,
            quantity: 1,
            description:
                'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            color: "Yellow",
            size: "Medium",
        },
        {
            id: 3,
            name: '3/4 Sleeve Kimono Dress',
            imageUrl: product3,
            discountPrice: 550,
            actualPrice: 750,
            quantity: 1,
            description:
                'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            color: "Black",
            size: "Large",
        },
    ]);
    const [isAgreed, setIsAgreed] = useState(false);

    const DELIVERY_CHARGE = 49;
    const HANDLEING_CHARGE = 15;

    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.discountPrice * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const finalTotal = subtotal + HANDLEING_CHARGE + DELIVERY_CHARGE;

    const handleContinueToShopping = () => {
        navigate('/shop');
    };

    const handleCheckboxChange = () => {
        setIsAgreed(!isAgreed); // Toggle the checkbox state
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '25px' }}>YOUR CART</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Left Section: Cart Items */}
                <div style={{ flex: "2" }}>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginBottom: "30px",
                        }}
                    >
                        <thead>
                            <tr style={{ borderBottom: "1px solid #ddd" }}>
                                <th style={{ textAlign: "left", padding: "10px" }}>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
                                    <td style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            style={{ width: "80px", height: "80px", marginRight: "10px" }}
                                        />
                                        <div>
                                            <strong>{item.name}</strong>
                                            <p style={{ margin: "5px 0", color: "#555" }}>
                                                Color: {item.color} | Size: {item.size}
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>₹{item.discountPrice.toFixed(2)}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                            style={{
                                                border: "1px solid #ddd",
                                                padding: "5px",
                                                margin: "0 5px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            -
                                        </button>
                                        {item.quantity}
                                        <button
                                            onClick={() => handleQuantityChange(item.id, 1)}
                                            style={{
                                                border: "1px solid #ddd",
                                                padding: "5px",
                                                margin: "0 5px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        ₹{(item.discountPrice * item.quantity).toFixed(2)}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "red",
                                                cursor: "pointer",
                                                fontSize: "18px",
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        style={{
                            color: "#28a745",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                        onClick={() => handleContinueToShopping()}
                    >
                        ← Continue Shopping
                    </button>
                </div>

                {/* Right Section: Summary */}
                <div style={{ flex: "1", border: "1px solid #ddd", padding: "20px" }}>
                    <h3 style={{ marginBottom: "15px" }}>SUMMARY</h3>
                    <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                    <p>Delivery Charge: ₹{DELIVERY_CHARGE.toFixed(2)}</p>
                    <p>Handling Charge: ₹{HANDLEING_CHARGE.toFixed(2)}</p>
                    <hr style={{ margin: "10px 0" }} />
                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>Total: ₹{finalTotal.toFixed(2)}</p>
                    <p style={{ color: "#777", fontSize: "14px" }}>
                        Shipping & taxes are calculated.
                    </p>
                    <div style={{ margin: "20px 0" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isAgreed}
                                onChange={handleCheckboxChange}
                            />{" "}
                            I agree with the <Link to="/terms" className="hover:text-gray-500">Terms & conditions</Link>
                        </label>
                    </div>
                    <button
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: isAgreed ? "#333" : "#888", // Dim color if disabled
                            color: "white",
                            border: "none",
                            cursor: isAgreed ? "pointer" : "not-allowed",
                            fontWeight: "bold",
                        }}
                        disabled={!isAgreed} // Disable button if not agreed
                        onClick={() =>
                            navigate("/checkout", {
                                state: { cartItems, subtotal, finalTotal },
                            })
                        }
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
