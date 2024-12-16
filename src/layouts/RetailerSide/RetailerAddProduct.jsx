import React, { useState } from "react";

const RetailerAddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    categoryType: "",
    price: "",
    discountedPrice: "",
    stock: "",
    sizes: [],
    colors: [],
    images: [],
  });

  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddSize = () => {
    if (sizeInput) {
      setProduct((prev) => ({ ...prev, sizes: [...prev.sizes, sizeInput] }));
      setSizeInput("");
    }
  };

  const handleAddColor = () => {
    if (colorInput) {
      setProduct((prev) => ({ ...prev, colors: [...prev.colors, colorInput] }));
      setColorInput("");
    }
  };

  const handleAddImage = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    const validImages = [];
    let hasError = false;

    files.forEach((file) => {
      const fileType = file.type;
      const fileSize = file.size;

      if (
        (fileType === "image/jpeg" || fileType === "image/png") &&
        fileSize <= 2 * 1024 * 1024 // 2MB in bytes
      ) {
        validImages.push(URL.createObjectURL(file)); // Add valid image for preview
      } else {
        hasError = true;
      }
    });

    if (hasError) {
      setErrorMessage(
        "Please select only JPG or PNG images and ensure they are smaller than 2MB."
      );
    } else {
      setErrorMessage(""); // Clear error message if no issues
    }

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, ...validImages],
    }));

    e.target.value = ""; // Reset file input
  };

  const handleRemoveItem = (type, index) => {
    setProduct((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    alert("Product added successfully!");
    setProduct({
      name: "",
      description: "",
      categoryType: "",
      price: "",
      discountedPrice: "",
      stock: "",
      sizes: [],
      colors: [],
      images: [],
    });
  };

  const labelStyle = { fontWeight: "bold", marginBottom: "5px", display: "block" };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc", // Added border here
    borderRadius: "5px", // Optional, for rounded corners
    outline: "none", // Optional, removes the default focus outline
  };
  const buttonStyle = {
    padding: "6px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  };
  const previewContainerStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  };
  const previewItemStyle = { position: "relative" };

  // Helper function for labeled input
  const renderLabeledInput = (label, name, value, onChange, required, type = "text") => (
    <div>
      <label style={labelStyle}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={inputStyle}
        required={required}
      />
    </div>
  );

  // Helper function for labeled textarea
  const renderLabeledTextarea = (label, name, value, onChange, required) => (
    <div>
      <label style={labelStyle}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        style={{
          ...inputStyle,
          height: "80px",
          resize: "none",
        }}
        required={required}
      />
    </div>
  );

  // Helper function for dynamic fields
  const renderDynamicField = (
    label,
    inputValue,
    setInputValue,
    handleAdd,
    items,
    type,
    handleRemove
  ) => (
    <div>
      <label style={labelStyle}>
        {label} <span style={{ color: "red" }}>*</span>
      </label>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={inputStyle}
        />
        <button type="button" onClick={handleAdd} style={buttonStyle}>
          Add
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              background: "#f0f0f0",
              padding: "5px 10px",
              borderRadius: "15px",
              marginRight: "5px",
              marginBottom: "5px",
            }}
          >
            {item}
            <button
              type="button"
              onClick={() => handleRemove(type, index)}
              style={{
                background: "none",
                border: "none",
                color: "red",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        padding: "30px",
        background: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Add Product
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {/* Product Fields */}
        {renderLabeledInput("Product Name", "name", product.name, handleInputChange, true)}
        {renderLabeledTextarea("Product Description", "description", product.description, handleInputChange, true)}
        {renderLabeledInput("Category Type", "categoryType", product.categoryType, handleInputChange, true)}
        {renderLabeledInput("Price", "price", product.price, handleInputChange, true, "number")}
        {renderLabeledInput("Discounted Price", "discountedPrice", product.discountedPrice, handleInputChange, true, "number")}
        {renderLabeledInput("Stock", "stock", product.stock, handleInputChange, true, "number")}

        {/* Dynamic Fields */}
        {renderDynamicField("Add Size", sizeInput, setSizeInput, handleAddSize, product.sizes, "sizes", handleRemoveItem)}
        {renderDynamicField("Add Color", colorInput, setColorInput, handleAddColor, product.colors, "colors", handleRemoveItem)}

        {/* Image Input */}
        <div>
          <label style={labelStyle}>
            Add Images <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="file"
            multiple
            accept="image/jpeg, image/png"
            onChange={handleAddImage}
            style={{ ...inputStyle, padding: "6px" }}
          />
          {errorMessage && (
            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
              {errorMessage}
            </p>
          )}
          <div style={previewContainerStyle}>
            {product.images.map((image, index) => (
              <div key={index} style={previewItemStyle}>
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveItem("images", index)}
                  style={{ ...buttonStyle, backgroundColor: "#FF4D4F" }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default RetailerAddProduct;
