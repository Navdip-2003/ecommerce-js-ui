import React, { useState } from "react";

function RetailerContact() {
    const [formData, setFormData] = useState({
        storeName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Form Data:", formData);
        alert("Your message has been submitted successfully!");
        // Add API call or form submission logic here
        setFormData({ storeName: "", phone: "", email: "", subject: "", message: "" });
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 style={styles.header}>Contact Us</h1>

            {/* Contact Form */}
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Store Name</label>
                    <input
                        type="text"
                        name="storeName"
                        value={formData.storeName}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your store name"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter the subject"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                        placeholder="Enter your message"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
        textAlign: "center",
        marginBottom: "30px",
        color: "#333",
        fontSize: "25px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    formGroup: {
        marginBottom: "20px",
    },
    label: {
        marginBottom: "10px",
        display: "block",
        fontWeight: "bold",
        color: "#555",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        resize: "none",
    },
    button: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default RetailerContact;
