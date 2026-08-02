import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";

import {
  FaArrowRight,
  FaBolt,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

function NewArrivals() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const newArrivals = products.filter(
    (product) => product.isNewArrival
  );

  const featuredProduct =
    newArrivals.find((product) => product.featured) ||
    newArrivals[0];

  if (loading) {
    return (
      <h2 className="text-center mt-24 text-2xl">
        Loading New Arrivals...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center mt-24 text-red-600">
        {error}
      </h2>
    );
  }

  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="relative h-[85vh] overflow-hidden">

        <img
          src={
            featuredProduct?.image ||
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600"
          }
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white px-6">

            <p className="uppercase tracking-[0.4em] text-blue-400 font-semibold">

              JUST ARRIVED

            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold">

              New Arrivals

            </h1>

            {/* <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8">

              Explore the latest premium technology,
              featuring cutting-edge monitors,
              gaming consoles and flagship devices
              now available at TechVerse.

            </p> */}

            <div className="mt-12 flex justify-center gap-5">

              <Link
                to="/products"
                className="rounded-full bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="rounded-full border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
              >
                Explore
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Featured Product */}

      {featuredProduct && (

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-widest">

                Featured Product

              </p>

              <h2 className="mt-4 text-5xl font-bold">

                {featuredProduct.name}

              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-8">

                {featuredProduct.description}

              </p>

              <h3 className="mt-10 text-4xl font-bold text-blue-600">

                ₹{featuredProduct.price.toLocaleString()}

              </h3>

              <div className="mt-10 flex gap-5">

                <Link
                  to={`/product/${featuredProduct._id}`}
                  className="rounded-full bg-black text-white px-8 py-4 hover:bg-gray-800 transition"
                >
                  View Product
                </Link>

                <Link
                  to="/products"
                  className="rounded-full border border-black px-8 py-4 hover:bg-black hover:text-white transition flex items-center gap-2"
                >
                  Browse More

                  <FaArrowRight />

                </Link>

              </div>

            </div>

            <div>

              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </section>

      )}

            {/* Latest Products */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-12">

            <div>

              {/* <p className="text-blue-600 font-semibold uppercase tracking-widest">
                Latest Collection
              </p> */}

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
                Explore New Arrivals
              </h2>

            </div>

            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
            >
              View All

              <FaArrowRight />

            </Link>

          </div>

          {newArrivals.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">

                No New Arrivals Yet

              </h2>

              <p className="mt-4 text-gray-500">

                Check back soon for the latest technology.

              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {newArrivals.map((product) => (

                <ProductCard
                  key={product._id}
                  product={product}
                />

              ))}

            </div>

          )}

        </div>

      </section>

      {/* Why Shop With Us */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-widest text-blue-600 font-semibold">

              Why TechVerse

            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">

              Premium Shopping Experience

            </h2>

          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <FaBolt className="mx-auto text-5xl text-yellow-500" />

              <h3 className="mt-6 text-xl font-bold">

                Latest Technology

              </h3>

              <p className="mt-3 text-gray-500">

                Discover cutting-edge devices from the world's leading brands.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <FaTruck className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-6 text-xl font-bold">

                Fast Delivery

              </h3>

              <p className="mt-3 text-gray-500">

                Safe and fast shipping directly to your doorstep.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <FaShieldAlt className="mx-auto text-5xl text-green-600" />

              <h3 className="mt-6 text-xl font-bold">

                Genuine Products

              </h3>

              <p className="mt-3 text-gray-500">

                Every product comes with official warranty and authenticity.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <FaCreditCard className="mx-auto text-5xl text-purple-600" />

              <h3 className="mt-6 text-xl font-bold">

                Secure Payments

              </h3>

              <p className="mt-3 text-gray-500">

                Shop confidently with secure payment options.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default NewArrivals;