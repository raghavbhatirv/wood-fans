import Footer from "./Components/Common/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <div className="font-Poppins">
        {/* <ProductPage /> */}
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
