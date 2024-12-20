import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function RetailerProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track errors


    useEffect(() => {
        // Fetch data from API
        const fetchProducts = async () => {
            try {
                // Retrieve userData from cookies
                let userData = null;
                try {
                    const userDataCookie = Cookies.get("userData"); // Fetch from cookie
                    if (userDataCookie) {
                        userData = JSON.parse(userDataCookie); // Parse JSON string
                    }
                } catch (err) {
                    console.error("Failed to parse userData from cookie:", err);
                }

                const response = await fetch(`http://localhost:8080/product/retailer/${userData.id}`);
                const json = await response.json();

                if (json.success && json.data && Array.isArray(json.data.products)) {
                    setProducts(json.data.products); // Access products array
                } else {
                    console.error("Unexpected API response structure:", json);
                    setError("Invalid data format received from server.");
                }
            } catch (err) {
                setError("Failed to fetch products. Please try again.");
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Product List</h1>
            <div style={styles.card}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>#</th>
                            <th style={styles.th}>Product Id</th>
                            <th style={styles.th}>Product Name</th>
                            <th style={styles.th}>Price</th>
                            <th style={styles.th}>Stock</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} style={styles.tr}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{product.id}</td>
                                <td style={styles.td}>{product.name}</td>
                                <td style={styles.td}>₹{product.price}</td>
                                <td style={styles.td}>{product.stock}</td>
                                <td style={styles.td}>
                                    <span
                                        style={{
                                            ...styles.statusBadge,
                                            backgroundColor:
                                                product.status === "ACTIVE"
                                                    ? "#28a745"
                                                    : product.status === "INACTIVE"
                                                        ? "#ffc107"
                                                        : "#17a2b8",
                                        }}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td style={styles.td}>
                                    <button
                                        style={styles.button}
                                        onClick={() => navigate(`/retailer/product-details/${product.productId}`, { state: { product } })}
                                    >
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
    },
    header: {
        textAlign: "center",
        marginBottom: "30px",
        color: "#343a40",
        fontSize: "25px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        overflowX: "auto",
    },
    th: {
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
        fontWeight: "600",
    },
    td: {
        padding: "12px",
        textAlign: "center",
        borderBottom: "1px solid #ddd",
    },
    tr: {
        backgroundColor: "#fff",
        transition: "background-color 0.3s",
    },
    button: {
        padding: "7px 15px",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    statusBadge: {
        padding: "5px 10px",
        borderRadius: "20px",
        color: "#fff",
        fontWeight: "bold",
    },
};

export default RetailerProductList;
