import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        mobile: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formValues.firstName.trim()) formErrors.firstName = "First Name is required";
        if (!formValues.lastName.trim()) formErrors.lastName = "Last Name is required";
        if (!formValues.email.trim()) formErrors.email = "Email is required";
        if (!formValues.mobile.trim()) formErrors.mobile = "Mobile Number is required";
        if (!formValues.password.trim()) formErrors.password = "Password is required";
        if (!formValues.confirmPassword.trim()) formErrors.confirmPassword = "Confirm Password is required";
        if (formValues.password !== formValues.confirmPassword) formErrors.confirmPassword = "Passwords do not match";

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            console.log('Form Submitted Successfully:', formValues);
            // Proceed with form submission logic, e.g., API call
        }
    };

    return (
        <div className="max-w-xl mx-auto m-12 p-6 border rounded rounded-5 shadow-xl bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">User Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>First Name<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            value={formValues.firstName}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.firstName && <p style={{ color: 'red', fontSize: '12px' }}>{errors.firstName}</p>}
                    </div>
                    <div style={{ flex: 1 }}>
                        <label>Last Name<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            value={formValues.lastName}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.lastName && <p style={{ color: 'red', fontSize: '12px' }}>{errors.lastName}</p>}
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>E-mail<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ex : shivaycloths@gmail.com"
                            value={formValues.email}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Gender</label>
                        <select
                            id="gender"
                            value={formValues.gender}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        >
                            <option disabled value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div style={{ flex: 1 }}>
                        <label>Mobile Number<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="number"
                            id="mobile"
                            placeholder="Ex : 9023150639"
                            value={formValues.mobile}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.mobile && <p style={{ color: 'red', fontSize: '12px' }}>{errors.mobile}</p>}
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Password<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ex : Shivay@123"
                            value={formValues.password}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Confirm Password<span style={{ color: "red" }}>*</span></label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Ex : Shivay@123"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "5px",
                                border: "1px solid #ccc"
                            }}
                        />
                        {errors.confirmPassword && <p style={{ color: 'red', fontSize: '12px' }}>{errors.confirmPassword}</p>}
                    </div>
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
                        cursor: "pointer"
                    }}
                >
                    Register
                </button>
            </form>

            <p className="text-center mt-4 text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>

            <p className="text-center mt-4 text-gray-600">OR</p>

            <p className="text-center mt-4 text-gray-600">
                Do you want to be a Retailer?{' '}
                <Link to="/retailer/retailer-register" className="text-blue-500 hover:underline">
                    Register
                </Link>
            </p>
        </div>
    );
}

export default Register;
