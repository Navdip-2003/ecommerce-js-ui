import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
import useAuth from '../hooks/useAuth';

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
      if (res) {
        navigate('/'); // Redirect to home upon successful login
      }
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto m-12 p-6 border rounded rounded-5 shadow-xl bg-white">
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

        {/* Login Button */}
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
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          {loading ? 'Logging in...' : 'Login'}
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
