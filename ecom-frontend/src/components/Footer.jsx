import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-bold text-blue-400">
            TechVerse
          </h2>

          <p className="mt-4 text-gray-300">
            Everything Tech. One Place.
          </p>

        </div>

        {/* Links */}

        <div>

          <h3 className="font-semibold text-lg mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li>Home</li>

            <li>Products</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Support */}

        <div>

          <h3 className="font-semibold text-lg mb-3">
            Support
          </h3>

          <ul className="space-y-2">

            <li>Help Center</li>

            <li>Privacy Policy</li>

            <li>Terms & Conditions</li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h3 className="font-semibold text-lg mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebook />

            <FaInstagram />

            <FaTwitter />

            <FaGithub />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center">

        © 2026 TechVerse. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;