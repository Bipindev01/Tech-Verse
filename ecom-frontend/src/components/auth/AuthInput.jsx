// components/auth/AuthInput.jsx
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

function AuthInput({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-5"
    >
      <label className="mb-1.5 block text-sm font-medium text-gray-700 lg:text-black-400/90">
        {label}
      </label>

      <div className="relative group">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required
          className={`w-full rounded-xl border px-5 py-3.5 outline-none transition-all duration-300 text-gray-900 lg:text-gray placeholder:text-gray-400 lg:placeholder:text-gray-400/50
            ${isFocused 
              ? "border-blue-500 bg-white/5 ring-2 ring-blue-500/20" 
              : "border-white/20 bg-white/5 lg:bg-white/5"
            }
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 lg:text-blue-300/70 lg:hover:text-blue-400 transition-colors"
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default AuthInput;