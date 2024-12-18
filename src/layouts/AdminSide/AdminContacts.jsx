import React, { useState } from "react";

function AdminContacts() {
    // Sample contact data
    const [contacts] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phoneNo: "1234567890",
            message: "I need help with my account.",
            type: "User",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phoneNo: "9876543210",
            message: "Can you provide wholesale prices?",
            type: "Retailer",
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike.johnson@example.com",
            phoneNo: "5678901234",
            message: "How do I reset my password?",
            type: "User",
        },
    ]);

    const [filter, setFilter] = useState("All Contacts");

    // Function to filter contacts based on the dropdown selection
    const filteredContacts = contacts.filter((contact) => {
        if (filter === "All Contacts") return true;
        if (filter === "User Contacts") return contact.type === "User";
        if (filter === "Retailer Contacts") return contact.type === "Retailer";
        return false;
    });

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Management</h1>

            {/* Dropdown for filtering */}
            <div style={styles.dropdownContainer}>
                <label htmlFor="filter" style={styles.dropdownLabel}>
                    Filter Contacts:{" "}
                </label>
                <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={styles.dropdown}
                >
                    <option value="All Contacts">All Contacts</option>
                    <option value="User Contacts">User Contacts</option>
                    <option value="Retailer Contacts">Retailer Contacts</option>
                </select>
            </div>

            {/* Contact Table */}
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead className="bg-gray-800 text-white">
                        <tr style={styles.tableHeaderRow}>
                            <th style={styles.tableHeader}>No.</th>
                            <th style={styles.tableHeader}>Name</th>
                            <th style={styles.tableHeader}>Email</th>
                            <th style={styles.tableHeader}>Phone No</th>
                            <th style={styles.tableHeader}>Message</th>
                            <th style={styles.tableHeader}>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map((contact, index) => (
                            <tr key={contact.id} style={styles.tableRow}>
                                <td style={styles.tableCell}>{index + 1}</td>
                                <td style={styles.tableCell}>{contact.name}</td>
                                <td style={styles.tableCell}>{contact.email}</td>
                                <td style={styles.tableCell}>{contact.phoneNo}</td>
                                <td style={styles.tableCell}>{contact.message}</td>
                                <td style={styles.tableCell}>{contact.type}</td>
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
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
    },
    dropdownContainer: {
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
    },
    dropdownLabel: {
        fontWeight: "bold",
        marginRight: "10px",
    },
    dropdown: {
        padding: "5px 10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    tableContainer: {
        overflowX: "auto",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        margin: "0 auto",
    },
    tableHeader: {
        padding: "10px 15px",
        textAlign: "left",
        fontWeight: "bold",
        borderBottom: "2px solid #ddd",
    },
    tableRow: {
        borderBottom: "1px solid #ddd",
    },
    tableCell: {
        padding: "10px 15px",
        textAlign: "left",
        color: "#555",
    },
};

export default AdminContacts;
