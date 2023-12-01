import React from "react";
import Hero from "../Components/Homepage/Hero";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import FactoryOrderPortfolio from "../Components/Homepage/FactoryOrderPortfolio";
import OurTeam from "../Components/Homepage/OurTeam";

function Home() {
  return (
    <div>
      <Hero />
      {/* <BuyersChoice /> */}
      <FactoryOrderPortfolio />
      <OurTeam />
    </div>
  );
}

export default Home;
