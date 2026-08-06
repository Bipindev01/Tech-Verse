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
    <AuthLayout title="Create Account 🚀" subtitle="Join TechVerse and explore premium technology.">
      
      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
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
          placeholder="Create a strong password"
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />

        {/* Password Match Hint */}
        {confirmPassword.length > 0 && (
          <p className={`text-xs ${password === confirmPassword ? "text-green-400" : "text-red-400"}`}>
            {password === confirmPassword ? "✓ Passwords match" : "✗ Passwords do not match"}
          </p>
        )}

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 h-4 w-4 rounded border-gray-700 bg-black/50 text-blue-600 focus:ring-blue-500"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-400 leading-tight">
            I agree to the <span className="text-blue-400 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading || password !== confirmPassword}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-base font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              Creating Account...
            </span>
          ) : (
            "Create Account"
          )}
        </motion.button>

        {/* Footer Link */}
        <div className="pt-2 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            Sign In
          </Link>
        </div>

      </form>
    </AuthLayout>
  );
}

export default Register;