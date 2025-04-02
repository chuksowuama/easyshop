import React from "react";
import HeroSect from "../WEB-COMPONENTS/HERO-SECTION/HeroSect";
import FeaturedProducts from "../WEB-COMPONENTS/FEATURED-PRODUCTS/FeaturedProducts";
import PromtionBan from "../PROMOTION-BANNER/PromtionBan";
const HomePage = () => {
  return (
    <>
      <div>
        <HeroSect />
        <FeaturedProducts/>
        <PromtionBan/>
      </div>
    </>
  );
};

export default HomePage;
