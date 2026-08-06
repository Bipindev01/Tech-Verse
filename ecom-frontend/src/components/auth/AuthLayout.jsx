// components/auth/AuthLayout.jsx
import { motion } from "framer-motion";
import { HiOutlineCpuChip } from "react-icons/hi2";

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen w-full bg-white flex relative overflow-hidden">
      
      {/* LEFT SIDE - Form Container (35% width on desktop) */}
      <div className="w-full lg:w-[35%] min-w-95 bg-white flex flex-col justify-center px-8 md:px-12 lg:px-16 py-10 relative z-20">
        
        {/* TechVerse Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-8 md:left-12 flex items-center gap-2"
        >
          <HiOutlineCpuChip className="text-5xl text-blue-600" />
          <span className="text-5xl font-bold tracking-tight text-slate-900">TechVerse</span>
        </motion.div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-lg text-slate-500 mb-8 font-light">
            {subtitle}
          </p>

          {/* The actual form goes here */}
          {children}
        </motion.div>
      </div>

      {/* RIGHT SIDE - Branding Background (65% width on desktop) */}
      <div className="hidden lg:flex flex-1 relative bg-linear-to-br from-[#0B1120] via-[#1E293B] to-[#312E81] overflow-hidden">
        
        {/* Branding Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-7xl font-black leading-snug mb-6 max-w-lg"
          >
            Experience Technology<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Like Never Before.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl text-slate-300 max-w-md font-light leading-relaxed"
          >
            Shop premium smartphones, gaming consoles, laptops, and cutting-edge gadgets designed for the future.
          </motion.p>
        </div>

        {/* Decorative Abstract Shapes (To mimic the MongoDB leaf patterns) */}
        <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="300" fill="url(#grad1)" />
            <circle cx="200" cy="500" r="150" fill="url(#grad2)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;