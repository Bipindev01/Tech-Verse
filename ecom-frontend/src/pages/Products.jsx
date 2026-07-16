import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/slices/productSlice";

import ProductCard from "../components/ProductCard";

function Products() {

  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <h2 className="text-center mt-20 text-2xl">
        Loading Products...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center mt-20 text-red-600">
        {error}
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Our Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;