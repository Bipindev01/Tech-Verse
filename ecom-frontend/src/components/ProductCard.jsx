import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover hover:scale-105 transition duration-300"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{product.name}</h2>

        <p className="text-gray-500 mt-2">{product.category}</p>

        <h3 className="text-blue-600 font-bold text-2xl mt-4">
          ₹ {product.price}
        </h3>

        <Link
          to={`/product/${product._id}`}
          className="block w-full mt-5 bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;