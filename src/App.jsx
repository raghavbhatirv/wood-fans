import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import { AllRoutes } from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import { storeDB } from "./Services/firebaseConfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postData } from "./Redux/Products/action";
function App() {
  return (
    <div className="font-Poppins">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
