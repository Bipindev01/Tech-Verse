import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-300 mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Footer Links */}

        <div className="items-center justify-items-center grid grid-cols-2 md:grid-cols-5 gap-30">
          {/* Shop */}

          <div>
            <h3 className="font-semibold text-slate-900 mb-5">Shop</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/products" className="hover:text-black">
                  Products
                </Link>
              </li>

              <li>Phones</li>

              <li>Laptops</li>

              <li>Accessories</li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h3 className="font-semibold text-slate-900 mb-5">Support</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>

              <li>FAQ</li>

              <li>Shipping</li>

              <li>Returns</li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold text-slate-900 mb-5">Company</h3>

            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-semibold text-slate-900 mb-5">Follow Us</h3>

            <div className="flex gap-5 text-2xl text-gray-600">
              <a href="#">
                <FaFacebook className="hover:text-blue-600 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>

              <a href="#">
                <FaTwitter className="hover:text-sky-500 transition" />
              </a>

              <a href="#">
                <FaGithub className="hover:text-black transition" />
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 whitespace-nowrap mt-10">
            © 2026 TechVerse. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
