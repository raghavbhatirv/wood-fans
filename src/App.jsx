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
    <div className={`${theme ? "bg-light-gray" : "bg-[#242424]"}`}>
      <nav className="bg-green-700 p-6 text-center">
        <FontAwesomeIcon
          icon={theme ? faSun : faMoon}
          className="text-[25px] text-white"
          onClick={handleTheme}
        />
      </nav>
      <LoginAndSignup theme={theme} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme ? "light" : "dark"}
      />
    </div>
  );
}

export default App;
