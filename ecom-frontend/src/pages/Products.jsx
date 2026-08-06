import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/slices/productSlice";

import ProductCard from "../components/ProductCard";
import CategorySection from "../components/home/CategorySection";

function Products() {

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams] = useSearchParams();

const search = searchParams.get("search") || "";

  const {
    products,
    loading,
    error,
  } = useSelector((state) => state.product);

  const filteredProducts = products.filter((product) => {

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  const matchesSearch =
    product.name.toLowerCase().includes(search.toLowerCase());

  return matchesCategory && matchesSearch;

});

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
    <>
    <CategorySection
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
  />
<br />
<div className="max-w-[1800px] mx-auto pt-20 pb-24 px-8">

    <h2 className="text-4xl font-bold mb-10">

      {selectedCategory === "All"
        ? "All Products"
        : selectedCategory}

    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {filteredProducts.map((product) => (

        <ProductCard
          key={product._id}
          product={product}
        />

      ))}

    </div>

  </div>
  <br />
  <br />
  </>
  );
}

export default Products;