import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
import useAuth from '../hooks/useAuth';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon

function Login() {
  const { login, error } = useAuth();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login(mobileNumber, password);
      let userData = null;
      try {
        const userDataCookie = Cookies.get('userData'); // Fetch from cookie
        if (userDataCookie) {
          userData = JSON.parse(userDataCookie); // Parse JSON string
        }
      } catch (error) {
        console.error("Failed to parse userData from cookie:", error);
      }
      const userType = userData?.type;

      if (res) {
        if (userType === 'U') {
          navigate('/home'); 
        } else if (userType === 'R') {
          navigate('/retailer/dashboard');
        } else if (userType === 'A') {
          navigate('/admin/dashboard');
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto m-12 p-6 border rounded shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        {/* Mobile Number Field */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            pattern="[0-9]{10}"
            placeholder="Enter your 10-digit mobile number"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Login Button with Loading Spinner */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: loading ? "#ccc" : "#28a745", // Grey when loading
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          disabled={loading}
          className="w-full py-2 px-4 text-white font-bold rounded hover:bg-blue-600"
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <FaSpinner className="animate-spin" /> 
              <span>Logging in...</span>
            </span>
          ) : (
            'Login'
          )}
        </button>
      </form>

      {/* Registration page link */}
      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Create New
        </Link>
      </p>
    </div>
  );
}

export default Login;
