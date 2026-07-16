import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
            TechVerse
          </Link>

          {/* Navigation */}

          <div className="hidden md:flex gap-8 font-medium">

            <NavLink
              to="/"
              className="hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className="hover:text-blue-600"
            >
              Products
            </NavLink>

            <NavLink
              to="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </NavLink>

          </div>

          {/* Search */}

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">

            <FaSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none ml-3 w-full"
            />

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-6">

            <Link
              to="/login"
              className="text-2xl hover:text-blue-600"
            >
              <FaUserCircle />
            </Link>

            <Link
              to="/cart"
              className="relative text-2xl hover:text-blue-600"
            >
              <FaShoppingCart />

              <span
                className="absolute -top-2 -right-2
                bg-orange-500 text-white
                rounded-full text-xs
                w-5 h-5 flex items-center justify-center"
              >
                0
              </span>

            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;