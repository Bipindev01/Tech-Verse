// components/auth/AuthInput.jsx
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AuthInput({ label, type, name, value, onChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required
          className={`w-full rounded-lg bg-white border px-4 py-3 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400
            ${isFocused 
              ? "border-blue-500 ring-1 ring-blue-500/20" 
              : "border-slate-300 hover:border-slate-400"
            }
          `}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthInput;