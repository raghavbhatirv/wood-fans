import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer";
import { AllRoutes } from "./Routes/AllRoutes";

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
