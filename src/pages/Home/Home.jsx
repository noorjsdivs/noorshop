import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <div className="w-full h-auto bg-gray-50">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <TrendingProducts type="trending" />
    </div>
  );
};

export default Home;
