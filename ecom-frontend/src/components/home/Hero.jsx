import { Link } from "react-router-dom";
import heroBg from "../../assets/showcase/ef76a6a283787a88db01a906e808dace.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="max-w-2xl">

          <h1 className="mx-auto h-90 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            Discover the Future of Technology
          </h1>

          {/* <p className="mt-8 text-lg leading-8 text-gray-200">
            Explore premium smartphones, laptops, headphones,
            smartwatches and accessories from the world's leading
            technology brands.
          </p> */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-full bg-blue-400 px-8 py-4 text-white font-semibold hover:bg-white transition"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="rounded-full border bg-teal-300 text-white px-8 py-4  font-semibold hover:bg-white transition"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-16 flex gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="mt-2 text-gray-300">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">500+</h2>
              <p className="mt-2 text-gray-300">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">50+</h2>
              <p className="mt-2 text-gray-300">Trusted Brands</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;