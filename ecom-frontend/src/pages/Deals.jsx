import { Link } from "react-router-dom";

const deals = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    oldPrice: "₹169,999",
    newPrice: "₹149,999",
    discount: "12% OFF",
  },
  {
    id: 2,
    name: "PlayStation 5",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",
    oldPrice: "₹62,999",
    newPrice: "₹54,999",
    discount: "13% OFF",
  },
  {
    id: 3,
    name: "MacBook",
    image: "https://itechstore.co.in/uploads/products/mac_m5_product.webp",
    oldPrice: "₹109,999",
    newPrice: "₹94,999",
    discount: "14% OFF",
  },
];

function Deals() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-linear-to-r from-red-500 to-orange-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            🔥 TechVerse Deals
          </h1>

          <p className="mt-5 text-xl">
            Save big on today's hottest gadgets.
          </p>

        </div>

      </section>

      {/* Deals */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Today's Best Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {deals.map((deal) => (

            <div
              key={deal.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <img
                src={deal.image}
                alt={deal.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  {deal.discount}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {deal.name}
                </h3>

                <div className="mt-4">

                  <span className="line-through text-gray-400 mr-3">
                    {deal.oldPrice}
                  </span>

                  <span className="text-3xl text-red-600 font-bold">
                    {deal.newPrice}
                  </span>

                </div>

                <Link
                  to="/products"
                  className="block mt-8 bg-black text-white py-3 rounded-xl text-center hover:bg-gray-800 transition"
                >
                  Shop Now
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Deals;