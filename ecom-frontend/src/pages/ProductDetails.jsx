import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

import { fetchSingleProduct } from "../redux/slices/productSlice";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  if (loading) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!product) {
    return <h1>No Product Found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>

          <h2 className="text-blue-600 text-4xl mt-5">₹ {product.price}</h2>

          <p className="mt-6 text-gray-700">{product.description}</p>

          <p className="mt-6 font-semibold">Category : {product.category}</p>

          <p className="mt-3 font-semibold">Stock : {product.stock}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
