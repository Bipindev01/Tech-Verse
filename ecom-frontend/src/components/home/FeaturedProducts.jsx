import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    category: "Phone",
    price: 89999,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
  },
  {
    id: 2,
    name: "MacBook Pro",
    category: "Laptop",
    price: 149999,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
  },
  {
    id: 3,
    name: "Sony Headphones",
    category: "Headphones",
    price: 15999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    name: "Apple Watch",
    category: "Watch",
    price: 42999,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  },
];

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-16">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;