import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../redux/slices/authSlice";

import {
  FaShoppingCart,
  FaSearch,
  FaUserCircle,
  FaChevronDown,
  FaBoxOpen,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { HiOutlineCpuChip } from "react-icons/hi2";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-[15px] font-medium transition-all duration-300 ${
      isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <HiOutlineCpuChip className="text-3xl text-blue-600" />

          <div>
            <h1 className="text-xl font-bold tracking-[0.20em] text-slate-900">
              TECHVERSE
            </h1>

            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Premium Tech
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-10">
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/deals" className={navLinkClass}>
            Deals
          </NavLink>

          <NavLink to="/new-arrivals" className={navLinkClass}>
            New Arrivals
          </NavLink>

          <NavLink to="/support" className={navLinkClass}>
            Support
          </NavLink>

          {user?.user?.role === "admin" && (
            <NavLink to="/admin" className={navLinkClass}>
              Dashboard
            </NavLink>
          )}
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">
          {/* Search */}

          <div className="hidden lg:flex items-center">
            <div className="flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/products?search=${search}`);
                  }
                }}
                className="w-56 bg-transparent outline-none text-sm"
              />

              <button onClick={() => navigate(`/products?search=${search}`)}>
                <FaSearch className="text-slate-600" />
              </button>
            </div>
          </div>

          {/* Profile */}

          <div className="relative">
            {user ? (
              <>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex h-6 w-23 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 transition hover:border-slate-300 hover:shadow-sm"
                >
                  <FaUserCircle className="text-xl text-blue-600" />

                  <span className="hidden md:block text-sm font-medium text-slate-700">
                    {user.user.name}
                  </span>

                  <FaChevronDown
                    className={`text-xs transition duration-300 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-xl bg-[#2d2d2d] text-white shadow-2xl border border-gray-700 z-50">
                    {/* User */}
                    <div className="px-6 py-5 border-b border-gray-600">
                      <p className="text-sm text-gray-400">Signed in as</p>

                      <p className="mt-1 text-lg font-semibold">
                        {user.user.name}
                      </p>
                    </div>

                    {/* My Profile */}
                    <Link
                      to="/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-[#3a3a3a] transition"
                    >
                      <FaUserCircle className="text-xl text-gray-300" />

                      <span className="text-[17px]">Your Account</span>
                    </Link>

                    {/* Orders */}
                    <Link
                      to="/myorders"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-[#3a3a3a] transition"
                    >
                      <FaBoxOpen className="text-xl text-gray-300" />

                      <span className="text-[17px]">Your Orders</span>
                    </Link>

                    {/* Admin */}
                    {user?.user?.role === "admin" && (
                      <Link
                        to="/admin"
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-[#3a3a3a] transition"
                      >
                        <FaBoxOpen className="text-xl text-gray-300" />

                        <span className="text-[17px]">Dashboard</span>
                      </Link>
                    )}

                    {/* Divider */}
                    <div className="border-t border-gray-600 mt-2"></div>

                    {/* Footer */}
                    <div className="px-6 py-4">
                      <p className="text-center text-sm text-gray-400">
                        Want to switch accounts?
                      </p>

                      <button
                        onClick={handleLogout}
                        className="mt-4 w-full rounded-md bg-red-600 py-3 text-lg font-semibold uppercase tracking-wide text-white transition hover:bg-red-700"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-slate-100"
              >
                <FaUserCircle className="text-xl" />
              </Link>
            )}
          </div>

          {/* Cart */}

          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-slate-100"
          >
            <FaShoppingCart className="text-xl text-slate-700" />

            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-slate-100 lg:hidden"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}

      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col px-6 py-4">
            <NavLink
              to="/products"
              onClick={() => setMobileMenu(false)}
              className="py-3"
            >
              Products
            </NavLink>

            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className="py-3"
            >
              Brands
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="py-3"
            >
              Support
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/profile"
                  onClick={() => setMobileMenu(false)}
                  className="py-3"
                >
                  My Profile
                </NavLink>

                <NavLink
                  to="/myorders"
                  onClick={() => setMobileMenu(false)}
                  className="py-3"
                >
                  My Orders
                </NavLink>

                {user?.user?.role === "admin" && (
                  <NavLink
                    to="/admin"
                    onClick={() => setMobileMenu(false)}
                    className="py-3"
                  >
                    Dashboard
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="py-3 text-left text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
