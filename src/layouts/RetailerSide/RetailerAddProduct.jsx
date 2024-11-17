import React from 'react';

function RetailerAddProduct() {
    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 style={styles.header}>Add Product</h1>

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
};
export default RetailerAddProduct