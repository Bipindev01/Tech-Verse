import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">

        <div>

          <p className="uppercase tracking-widest text-orange-300 mb-4">
            New Collection 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Discover The Latest Tech
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Smartphones, Laptops, Smart Watches,
            Headphones and Accessories at the
            best prices.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/products"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700"
            alt="Technology"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;