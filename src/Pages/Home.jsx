import React from "react";
import Hero from "../Components/Homepage/Hero";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import FactoryOrderPortfolio from "../Components/Homepage/FactoryOrderPortfolio";

function Home() {
  return (
    <div>
      <Hero />
      {/* <BuyersChoice /> */}
      <FactoryOrderPortfolio />
    </div>
  );
}

export default Home;
