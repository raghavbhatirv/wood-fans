import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Pages/SignUp&Login/Signup";
import LoginAndSignup from "./Pages/SignUp&Login/LoginAndSignup";
import Demo from "./Components/Common/Demo";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./Redux/Theme/action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { loginWithEmailAndPassword } from "./Redux/Auth/action";
import Footer from "./Components/Common/Footer";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  const dispatch = useDispatch();

  const theme = useSelector((store) => store.themeReducer.theme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  // Remember Me functionalites
  /*
  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMeUser");
    if (rememberMe) {
      const { email, password } = JSON.parse(rememberMe);
      dispatch(loginWithEmailAndPassword(email, password));
    }
  }, [dispatch]);
  */

  return (
    <>
      <div className="font-Poppins">
        {/* <LoginAndSignup/>
        <Footer/> */}
        <SingleProduct/>
      </div>
    </>
  );
}

export default App;
