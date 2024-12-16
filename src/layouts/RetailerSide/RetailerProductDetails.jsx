import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RetailerProductDetail() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [productDetails, setProductDetails] = useState(state.product);
    const [newSize, setNewSize] = useState("");
    const [newColor, setNewColor] = useState("");
    const [newImages, setNewImages] = useState([]);

    const handleCloseModal = () => {
        navigate("/retailer/product-list");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({ ...productDetails, [name]: value });
    };

    const handleAddSize = () => {
        if (newSize.trim()) {
            setProductDetails({
                ...productDetails,
                category: {
                    ...productDetails.category,
                    size: [...productDetails.category.size, newSize],
                },
            });
            setNewSize("");
        }
    };

    const handleAddColor = () => {
        if (newColor.trim()) {
            setProductDetails({
                ...productDetails,
                category: {
                    ...productDetails.category,
                    color: [...productDetails.category.color, newColor],
                },
            });
            setNewColor("");
        }
    };

    const handleAddImages = (e) => {
        const files = Array.from(e.target.files);
        const newImageURLs = files.map((file) => URL.createObjectURL(file));
        setNewImages([...newImages, ...newImageURLs]);
    };

    const handleSaveChanges = () => {
        const updatedImages = [
            ...productDetails.image[0].url,
            ...newImages,
        ];
        const updatedProductDetails = {
            ...productDetails,
            image: [{ url: updatedImages }],
        };
        console.log("Updated Product Details:", updatedProductDetails);
        alert("Product updated successfully!");
        handleCloseModal();
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Product Details</h1>
            <div style={styles.card}>
                <div style={styles.field}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={productDetails.name}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={productDetails.description}
                        onChange={handleInputChange}
                        style={styles.textarea}
                    />
                </div>
                <div style={styles.field}>
                    <label>Category Type:</label>
                    <input
                        type="text"
                        name="category"
                        value={productDetails.category.type}
                        readOnly
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={productDetails.price}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Discount Price:</label>
                    <input
                        type="text"
                        name="discountPrice"
                        value={productDetails.discountPrice}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={productDetails.stock}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={productDetails.status}
                        onChange={handleInputChange}
                        style={styles.select}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                {/* Add Size */}
                <div style={styles.field}>
                    <p>Sizes: {productDetails.category.size.join(", ")}</p>
                    <div style={styles.inlineField}>
                        <input
                            type="text"
                            value={newSize}
                            onChange={(e) => setNewSize(e.target.value)}
                            placeholder="Add Size"
                            style={styles.inputSmall}
                        />
                        <button style={styles.addButton} onClick={handleAddSize}>
                            Add
                        </button>
                    </div>
                    
                </div>

                {/* Add Color */}
                <div style={styles.field}>
                    <p>Colors: {productDetails.category.color.join(", ")}</p>
                    <div style={styles.inlineField}>
                        <input
                            type="text"
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                            placeholder="Add Color"
                            style={styles.inputSmall}
                        />
                        <button style={styles.addButton} onClick={handleAddColor}>
                            Add
                        </button>
                    </div>
                </div>

                {/* Add Images */}
                <div style={styles.field}>
                    <label>Images:</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleAddImages}
                        style={styles.input}
                    />
                    <div style={styles.images}>
                        {newImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`New Product ${index + 1}`}
                                style={styles.image}
                            />
                        ))}
                    </div>
                </div>

                {/* Display Existing Images */}
                <div style={styles.images}>
                    {productDetails.image[0].url.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Product ${index + 1}`}
                            style={styles.image}
                        />
                    ))}
                </div>

                <div style={styles.modalActions}>
                    <button style={styles.saveButton} onClick={handleSaveChanges}>
                        Save Changes
                    </button>
                    <button style={styles.closeButton} onClick={handleCloseModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: { padding: "20px", fontFamily: "Roboto, sans-serif", backgroundColor: "#f9f9f9" },
    header: { textAlign: "center", color: "#333", fontSize: "24px", marginBottom: "20px" },
    card: { padding: "20px", backgroundColor: "#fff", width: "800px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", justifySelf: "center" },
    field: { marginBottom: "15px" },
    input: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" },
    inputSmall: { width: "70%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", marginRight: "10px" },
    textarea: { width: "100%", height: "80px", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" },
    select: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" },
    images: { display: "flex", gap: "10px", marginBottom: "15px" },
    image: { width: "100px", height: "100px", objectFit: "cover", borderRadius: "4px" },
    inlineField: { display: "flex", alignItems: "center" },
    addButton: { padding: "10px 15px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
    modalActions: { display: "flex", justifyContent: "space-between", marginTop: "20px" },
    closeButton: {
        padding: "10px 20px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    saveButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default RetailerProductDetail;
