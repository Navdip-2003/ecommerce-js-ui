import React, { useState } from "react";

function AdminSettings() {
    const [settings, setSettings] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/100",
            mainText: "Setting 1",
            subText: "Description for setting 1",
            link: "https://example.com/1",
            position: "start",
            status: "Active",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/100",
            mainText: "Setting 2",
            subText: "Description for setting 2",
            link: "https://example.com/2",
            position: "end",
            status: "Inactive",
        },
    ]);

    const [selectedSetting, setSelectedSetting] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newBanner, setNewBanner] = useState({
        id: null,
        image: "",
        mainText: "",
        subText: "",
        link: "",
        position: "start",
        status: "Active",
    });

    const handleViewDetails = (setting) => {
        setSelectedSetting({ ...setting });
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isAddModalOpen) {
            setNewBanner((prev) => ({ ...prev, [name]: value }));
        } else {
            setSelectedSetting((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleImageUpload = (e, isNew) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            if (isNew) {
                setNewBanner((prev) => ({ ...prev, image: imageURL }));
            } else {
                setSelectedSetting((prev) => ({ ...prev, image: imageURL }));
            }
        }
    };

    const handleSave = () => {
        setSettings((prevSettings) =>
            prevSettings.map((setting) =>
                setting.id === selectedSetting.id ? selectedSetting : setting
            )
        );
        setIsModalOpen(false);
    };

    const handleAddBanner = () => {
        setSettings((prevSettings) => [
            ...prevSettings,
            { ...newBanner, id: settings.length + 1 },
        ]);
        setIsAddModalOpen(false);
        setNewBanner({
            id: null,
            image: "",
            mainText: "",
            subText: "",
            link: "",
            position: "start",
            status: "Active",
        });
    };

    return (
        <div style={styles.container}>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Settings Management
            </h1>

            {/* Add Banner Button */}
            <div style={{ textAlign: "right", marginBottom: "20px" }}>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => setIsAddModalOpen(true)}
                >
                    ➕ Add Banner
                </button>
            </div>

            {/* Table */}
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>No.</th>
                            <th style={styles.tableHeader}>Image</th>
                            <th style={styles.tableHeader}>Main Text</th>
                            <th style={styles.tableHeader}>Sub Text</th>
                            <th style={styles.tableHeader}>Status</th>
                            <th style={styles.tableHeader}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {settings.map((setting, index) => (
                            <tr key={setting.id} style={styles.tableRow}>
                                <td style={styles.tableCell}>{index + 1}</td>
                                <td style={styles.tableCell}>
                                    <img src={setting.image} alt="Setting" style={styles.image} />
                                </td>
                                <td style={styles.tableCell}>{setting.mainText}</td>
                                <td style={styles.tableCell}>{setting.subText}</td>
                                <td
                                    className={`px-6 py-4 font-semibold ${
                                        setting.status === "Active" ? "text-green-500" : "text-red-500"
                                    }`}
                                >
                                    {setting.status}
                                </td>
                                <td style={styles.tableCell}>
                                    <button
                                        className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
                                        onClick={() => handleViewDetails(setting)}
                                    >
                                        👁️ View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {isModalOpen && selectedSetting && (
                <Modal
                    title="Edit Setting"
                    setting={selectedSetting}
                    onChange={handleChange}
                    onImageUpload={(e) => handleImageUpload(e, false)}
                    onSave={handleSave}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {/* Add Modal */}
            {isAddModalOpen && (
                <Modal
                    title="Add Banner"
                    setting={newBanner}
                    onChange={handleChange}
                    onImageUpload={(e) => handleImageUpload(e, true)}
                    onSave={handleAddBanner}
                    onClose={() => setIsAddModalOpen(false)}
                />
            )}
        </div>
    );
}

function Modal({ title, setting, onChange, onImageUpload, onSave, onClose }) {
    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modal}>
                <h2 style={styles.modalHeader}>{title}</h2>
                <div style={styles.modalContent}>
                    <label>
                        Image:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={onImageUpload}
                            style={{ marginBottom: "10px" }}
                        />
                        <div style={styles.imagePreview}>
                            <img
                                src={setting.image || "https://via.placeholder.com/120"}
                                alt="Preview"
                                style={styles.modalImage}
                            />
                        </div>
                    </label>
                    <label>
                        Main Text:
                        <input
                            type="text"
                            name="mainText"
                            value={setting.mainText}
                            onChange={onChange}
                            style={styles.input}
                        />
                    </label>
                    <label>
                        Sub Text:
                        <input
                            type="text"
                            name="subText"
                            value={setting.subText}
                            onChange={onChange}
                            style={styles.input}
                        />
                    </label>
                    <label>
                        Link:
                        <input
                            type="text"
                            name="link"
                            value={setting.link}
                            onChange={onChange}
                            style={styles.input}
                        />
                    </label>
                    <label>
                        Position:
                        <select
                            name="position"
                            value={setting.position}
                            onChange={onChange}
                            style={styles.input}
                        >
                            <option value="start">Start</option>
                            <option value="end">End</option>
                        </select>
                    </label>
                    <label>
                        Status:
                        <select
                            name="status"
                            value={setting.status}
                            onChange={onChange}
                            style={styles.input}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </label>
                </div>
                <div style={styles.modalActions}>
                    <button style={styles.saveButton} onClick={onSave}>
                        Save
                    </button>
                    <button style={styles.cancelButton} onClick={onClose}>
                        Cancel
                    </button>
                </div>
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
    tableContainer: {
        margin: "20px auto",
        overflowX: "auto",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    tableHeader: {
        padding: "10px",
        textAlign: "left",
        backgroundColor: "#333",
        color: "#fff",
    },
    tableRow: {
        borderBottom: "1px solid #ddd",
    },
    tableCell: {
        padding: "10px",
    },
    image: {
        width: "100px",
        height: "100px",
        borderRadius: "5px",
    },
    eyeButton: {
        cursor: "pointer",
        padding: "5px 10px",
        fontSize: "16px",
        color: "#007bff",
        background: "none",
        border: "none",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        width: "400px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    modalHeader: {
        marginBottom: "20px",
        textAlign: "center",
    },
    modalContent: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        width: "100%",
        padding: "8px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginTop: "5px",
    },
    imagePreview: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "120px", 
        borderRadius: "8px", 
        overflow: "hidden",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9", 
    },
    modalImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    modalActions: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
    },
    saveButton: {
        backgroundColor: "#28a745",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    cancelButton: {
        backgroundColor: "#dc3545",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
export default AdminSettings;
