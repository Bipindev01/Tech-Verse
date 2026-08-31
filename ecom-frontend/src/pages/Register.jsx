import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { registerUser } from "../redux/slices/authSlice";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const result = await dispatch(registerUser(formData));
    if (registerUser.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  return (
    <AuthLayout 
      title="Create your account" 
      // subtitle="Already have an account? " 
    >
      
      <div className="mb-6 text-sm">
        <span className="text-slate-600 font-light">Already have an account? </span>
        <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
          Sign In
        </Link>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 flex items-center gap-2 text-red-700 text-sm">
          <span className="text-lg">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        <AuthInput
          label="Full Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="John Doe"
        />

        <AuthInput
          label="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Create a password"
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading || password !== confirmPassword}
          className="w-full rounded-lg bg-blue-600 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              Creating Account...
            </span>
          ) : (
            "Sign Up"
          )}
        </motion.button>

      </form>
    </AuthLayout>
  );
}

export default Register;