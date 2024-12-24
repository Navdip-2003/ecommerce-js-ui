import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);  // New loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;// Minimum eight characters, at least one letter and one number

    if (!formValues.firstName.trim()) formErrors.firstName = "First Name is required";
    if (!formValues.lastName.trim()) formErrors.lastName = "Last Name is required";

    if (!formValues.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailPattern.test(formValues.email)) {
      formErrors.email = "Invalid email format (e.g., example@mail.com)";
    }
    if (!formValues.mobile.trim()) formErrors.mobile = "Mobile Number is required";

    if (!formValues.password.trim()) {
      formErrors.password = "Password is required";
    } else if (!passwordPattern.test(formValues.password)) {
      formErrors.password =
        "Password must be at least 8 characters long and include at least one letter and one number";
    }

    if (!formValues.confirmPassword.trim()) {
      formErrors.confirmPassword = "Confirm Password is required";
    } else if (formValues.password !== formValues.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(""); // Clear any previous API errors
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setLoading(true); // Set loading state to true when submitting

      try {
        const response = await axios.post("http://localhost:8080/auth/register", {
          mobileNumber: formValues.mobile,
          password: formValues.password,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          type: "U", // Defaulting type to 'U'
          status: "pending"
        });

        if (response.data.success) {
          console.log("Registration Successful:", response.data);
          navigate("/login"); // Redirect to login on successful registration
        }
      } catch (error) {
        if (error.response && error.response.data) {
          // API response with error
          setApiError(error.response.data.message || "Something went wrong.");
        } else {
          // Network or other error
          setApiError("Unable to connect to the server.");
        }
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto m-12 p-6 border rounded rounded-5 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">User Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label>
              First Name<span style={{ color: "red" }}>*</span>
            </label>
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
                border: "1px solid #ccc",
              }}
            />
            {errors.firstName && <p style={{ color: "red", fontSize: "12px" }}>{errors.firstName}</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label>
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
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
                border: "1px solid #ccc",
              }}
            />
            {errors.lastName && <p style={{ color: "red", fontSize: "12px" }}>{errors.lastName}</p>}
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            E-mail<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ex: shivaycloths@gmail.com"
            value={formValues.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
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
                border: "1px solid #ccc",
              }}
            >
              <option disabled value="">
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>
              Mobile Number<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              id="mobile"
              placeholder="Ex: 9023150639"
              value={formValues.mobile}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            {errors.mobile && <p style={{ color: "red", fontSize: "12px" }}>{errors.mobile}</p>}
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ex: Shivay@123"
            value={formValues.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            Confirm Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Ex: Shivay@123"
            value={formValues.confirmPassword}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</p>
          )}
        </div>

        {apiError && <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{apiError}</p>}

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
            display: "flex",        // Use flex to align text and spinner
            justifyContent: "center", // Center content (horizontally) by default
            alignItems: "center",   // Vertically center the text and spinner
            gap: "10px",
          }}
        >
          {loading ? (
            <>
              <span>Loading...</span>
              <div className="spinner center"></div>
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>

      <p className="text-center mt-4 text-gray-600">OR</p>

      <p className="text-center mt-4 text-gray-600">
        Do you want to be a Retailer?{" "}
        <Link to="/retailer/retailer-register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>

      {/* CSS for Spinner */}
      <style>
        {`
          .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Register;
