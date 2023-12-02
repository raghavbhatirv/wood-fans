import React from "react";
import Hero from "../Components/Homepage/Hero";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import FactoryOrderPortfolio from "../Components/Homepage/FactoryOrderPortfolio";
import OurTeam from "../Components/Homepage/OurTeam";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Products/Action";
import PhotoGallery from "../Components/Homepage/PhotoGallery";
import ContactUs from "../Components/Homepage/ContactUs";
import ClientsReviews from "../Components/Common/ClientsReviews";
function Home() {
  return (
    <div>
      <Hero />
      <div className="px-5">
        <BuyersChoice />
        <FactoryOrderPortfolio />
        <PhotoGallery />
        <ClientsReviews />
        <OurTeam />
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
