import React from "react";
import SlideShow from "../components/SlideShow";
import PopularProducts from "../components/PopularProducts";
import NewArrivals from "../components/NewArrivals";
import SofaCollection from "../components/SofaCollection";
import FeaturedProducts from "../components/FeaturedProducts";
import Blog from "../components/Blog";
import BrandsClient from "../components/BrandsClient";
export const Home = () => {
  return (
    <>
      <SlideShow />
      <PopularProducts />
      <NewArrivals />
      <SofaCollection />
      <FeaturedProducts />
      <Blog />
      <BrandsClient />
    </>
  );
};
