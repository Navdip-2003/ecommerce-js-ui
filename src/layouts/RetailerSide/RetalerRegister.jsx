import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RetailerRegister() {
    const [photo, setPhoto] = useState(null);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        storeName: '',
        retailerName: '',
        email: '',
        mobile: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({ ...prev, addressType: value }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, photo: 'File size should be less than 2MB' }));
                return;
            }
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                setErrors((prev) => ({ ...prev, photo: 'Only JPG and PNG files are allowed' }));
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
                setErrors((prev) => ({ ...prev, photo: '' }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.storeName.trim()) newErrors.storeName = 'Store Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile Number is required';
        if (!formData.street.trim()) newErrors.street = 'Street is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
        if (!formData.password.trim()) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!photo) newErrors.photo = 'Store Image is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            // Add your registration logic here (e.g., API call)
        }
    };

    return (
        <div className="max-w-xl mx-auto m-12 p-6 border rounded rounded-5 shadow-xl bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Retailer Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Profile photo upload button */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <label htmlFor="photoUpload" style={{ cursor: "pointer" }}>
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                backgroundColor: "#f0f0f0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                margin: "0 auto",
                                border: "2px solid #ddd"
                            }}
                        >
                            {photo ? (
                                <img
                                    src={photo}
                                    alt="Uploaded"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                <span style={{ color: "#888" }}>Add Store Image</span>
                            )}
                        </div>
                    </label>
                    <input
                        type="file"
                        id="photoUpload"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                    {errors.photo && <p style={{ color: "red" }}>{errors.photo}</p>}
                </div>

                {/* Store Name and Retailer Name fields */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Store Name<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            id="storeName"
                            placeholder="Store Name"
                            value={formData.storeName}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.storeName && <p style={{ color: "red" }}>{errors.storeName}</p>}
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Retailer Name</label>
                        <input
                            type="text"
                            id="retailerName"
                            placeholder="Retailer Name"
                            value={formData.retailerName}
                            onChange={handleInputChange}
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

                {/* Email field */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Email<span style={{ color: "red" }}>*</span></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ex: shivaycloths@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                {/* Mobile Number field */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Mobile Number<span style={{ color: "red" }}>*</span></label>
                    <input
                        type="number"
                        id="mobile"
                        placeholder="Ex: 9023150639"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
                </div>

                <div style={{ border: "2px solid #D3D3D3", borderRadius: "5px", padding: "20px", marginBottom: "15px" }}>
                    <h3 style={{ marginBottom: "15px", textAlign: "center", fontWeight: "bold"}}>Address Details</h3>

                    <div style={{ marginBottom: "15px" }}>
                        <label>Address Type<span style={{ color: "red" }}>*</span></label>
                        <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: formData.addressType === 'Permanent' ? '2px solid #28a745' : '2px solid #ddd',
                                    borderRadius: "5px",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease-in-out",
                                    width: "120px",
                                    textAlign: "center",
                                    backgroundColor: formData.addressType === 'Permanent' ? '#e0f7e0' : 'white'
                                }}
                                onClick={() => setFormData((prev) => ({ ...prev, addressType: 'Permanent' }))}
                            >
                                <input
                                    type="radio"
                                    id="permanent"
                                    name="addressType"
                                    value="Permanent"
                                    checked={formData.addressType === 'Permanent'}
                                    onChange={handleRadioChange}
                                    style={{ display: "none" }} // Hide the default radio button
                                />
                                <label htmlFor="permanent" style={{ cursor: "pointer" }}>Permanent</label>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: formData.addressType === 'Current' ? '2px solid #28a745' : '2px solid #ddd',
                                    borderRadius: "5px",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease-in-out",
                                    width: "120px",
                                    textAlign: "center",
                                    backgroundColor: formData.addressType === 'Current' ? '#e0f7e0' : 'white'
                                }}
                                onClick={() => setFormData((prev) => ({ ...prev, addressType: 'Current' }))}
                            >
                                <input
                                    type="radio"
                                    id="current"
                                    name="addressType"
                                    value="Current"
                                    checked={formData.addressType === 'Current'}
                                    onChange={handleRadioChange}
                                    style={{ display: "none" }} // Hide the default radio button
                                />
                                <label htmlFor="current" style={{ cursor: "pointer" }}>Current</label>
                            </div>
                        </div>
                    </div>

                    {/* Address Fields: Street, City, State, Pincode */}
                    <div style={{ marginBottom: "15px" }}>
                        <label>Street<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            id="street"
                            placeholder="Street"
                            value={formData.street}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.street && <p style={{ color: "red" }}>{errors.street}</p>}
                    </div>

                    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                        <div style={{ flex: 1 }}>
                            <label>City<span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                id="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc"
                                }}
                            />
                            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
                        </div>

                        <div style={{ flex: 1 }}>
                            <label>State<span style={{ color: "red" }}>*</span></label>
                            <input
                                type="text"
                                id="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleInputChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc"
                                }}
                            />
                            {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
                        </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label>Pincode<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            id="pincode"
                            placeholder="Pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.pincode && <p style={{ color: "red" }}>{errors.pincode}</p>}
                    </div>
                </div>

                {/* Password and Confirm Password fields */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Password<span style={{ color: "red" }}>*</span></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ex: Shivay@123"
                        value={formData.password}
                        onChange={handleInputChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Confirm Password<span style={{ color: "red" }}>*</span></label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Ex: Shivay@123"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
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
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>
            </form>

            {/* Login link */}
            <p className="text-center mt-4 text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
}

export default RetailerRegister;
