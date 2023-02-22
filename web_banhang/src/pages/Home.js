import React from "react";
import SlideShow from "../components/SlideShow";
import PopularProducts from "../components/PopularProducts";
import NewArrivals from "../components/NewArrivals";
import FeaturedProducts from "../components/FeaturedProducts";
import Blog from "../components/Blog";

export const Home = () => {
  return (
    <>
      <SlideShow />
      <PopularProducts />
      <NewArrivals />
      <FeaturedProducts />
      <Blog />
    </>
  );
};
