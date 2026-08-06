// components/auth/AuthLayout.jsx
import { motion } from "framer-motion";
import { HiOutlineCpuChip } from "react-icons/hi2";

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen w-full relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      
      {/* 🔥 HIGH-TECH BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* 🔥 GRID OVERLAY FOR TECH FEEL */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE - BIG BRANDING */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start space-y-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <HiOutlineCpuChip className="text-5xl text-blue-400" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-white tracking-wide drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                TECHVERSE
              </h1>
              <p className="uppercase tracking-[0.4em] text-sm text-blue-400 font-light">
                Premium Tech
              </p>
            </div>
          </div>

          {/* Big Hero Text */}
          <div className="space-y-4 mt-8">
            <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Experience
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Technology
              </span>
              <br />
              Like Never Before.
            </h2>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              Shop premium smartphones, gaming consoles, laptops, and cutting-edge gadgets designed for the future.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE - THE LOGIN CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[450px] relative"
        >
          {/* Card Glow Behind */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>

          {/* The Actual Card */}
          <div className="relative bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
            
            {/* Card Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              <p className="mt-2 text-gray-400 text-sm">{subtitle}</p>
            </div>

            {/* Children (Login/Register Form) */}
            {children}

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default AuthLayout;