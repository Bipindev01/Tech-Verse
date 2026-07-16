import React from 'react'
import Hero from "../components/home/Hero";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}

export default Home;