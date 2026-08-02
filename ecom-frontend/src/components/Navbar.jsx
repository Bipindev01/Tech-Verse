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
                  <div className="absolute mt-3 w-40 mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <div className="border-b border-slate-100 px-5 py-4">
                      <p className="text-sm text-slate-500">Signed in as</p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {user.user.name}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50"
                    >
                      <FaUserCircle />
                      My Profile
                    </Link>

                    <Link
                      to="/myorders"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50"
                    >
                      <FaBoxOpen />
                      My Orders
                    </Link>

                    {user?.user?.role === "admin" && (
                      <Link
                        to="/admin"
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50"
                      >
                        Dashboard
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 px-5 py-4 text-red-600 transition hover:bg-red-50"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
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
