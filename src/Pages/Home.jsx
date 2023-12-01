import React, { useEffect } from "react";
import Hero from "../Components/Homepage/Hero";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import FactoryOrderPortfolio from "../Components/Homepage/FactoryOrderPortfolio";
import OurTeam from "../Components/Homepage/OurTeam";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Products/Action";
function Home() {
  const { productData } = useSelector((store) => store.dataReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
