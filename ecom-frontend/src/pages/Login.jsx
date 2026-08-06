import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { loginUser } from "../redux/slices/authSlice";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <AuthLayout 
      title="Log in to your account" 
    >
      {/* Subtitle Link (Styled to match MongoDB) */}
      <div className="mb-6 text-sm">
        <span className="text-slate-600 font-normal">Don't have an account? </span>
        <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
          Sign Up
        </Link>
      </div>

      {/* Error Alert - Clean Green/Red box like MongoDB */}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 flex items-center gap-2 text-red-700 text-sm">
          <span className="text-lg">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <AuthInput
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        {/* Forgot Password - Right aligned */}
        <div className="flex justify-end">
          <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
            Forgot your password?
          </button>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              Logging in...
            </span>
          ) : (
            "Next"
          )}
        </motion.button>

      </form>
    </AuthLayout>
  );
}

export default Login;