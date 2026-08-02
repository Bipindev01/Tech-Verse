import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { removeProduct } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";

function AdminProducts() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (confirmDelete) {
      dispatch(removeProduct(id));
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center mt-20 text-3xl">Loading...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Manage Products</h1>

        <Link
          to="/admin/products/add"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </Link>
      </div>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Image</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">Stock</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>

              <td className="border p-3">{product.name}</td>

              <td className="border p-3">₹ {product.price}</td>

              <td className="border p-3">{product.stock}</td>

              <td className="border p-3">
                <Link
                  to={`/admin/products/edit/${product._id}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
