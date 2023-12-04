import React, { useState } from "react";
import ImageButton from "../../Components/Common/ImageButton";
import {
  facebook,
  facebookIcon,
  google,
  googleIcon,
  whiteGoogle,
} from "../../assets/images";
import Signup from "./Signup";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { loginWithFacebook, loginWithGoogle } from "../../Redux/Auth/action";
import PopUpDialog from "../../Components/Common/PopUpDialog";
import { greenTik, worngTik } from "../../assets/animation/animi";
import { useNavigate } from "react-router-dom";

const LoginAndSignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [showPopup, setShowPopup] = useState({
    message: "",
    lottie: "",
    show: false,
  });

  // const [show, setShow] = useState(false)
 
  const theme = useSelector((store) => store.themeReducer.theme);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };


  // console.log(errorMessage,successMessage)

  // const handleSuccessMessage = () => {
  //   setShowPopup({
  //     message: successMessage,
  //     lottie: "success",
  //     show: true,
  //   });
  //   setShow(!show)
  // };
  // const handleErrorMessage = () => {
  //   setShowPopup({
  //     message: errorMessage,
  //     lottie: "error",
  //     show: true,
  //   });
    
  //   setShow(!show)
  // };

  

  const handleLoginAndSign = () => {
    setIsLogin((p) => !p);
  };
  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle(redirectToHome));
  };
  const handleLoginWithFacebook = () => {
    dispatch(loginWithFacebook(redirectToHome));
  };
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 max-w-screen-xl m-auto gap-5 p-5 font-Poppins justify-center items-center ${
        theme ? "text-black" : "text-white p-10"
      }`}
      style={{ marginRight: "auto", marginLeft: "auto" }}
    >
      <div className="flex-1">
        {isLogin ? (
          <Signup onClick={handleLoginAndSign}/>
        ) : (
          <Login onClick={handleLoginAndSign} />
        )}

        <div className="grid grid-cols-2 gap-4 mt-3">
          <ImageButton
            image={facebookIcon}
            className="bg-[#4267b2] md:text-md 2sm:text-[15px] xl:text-lg"
            text="Login with Facebook"
            onClick={handleLoginWithFacebook}
          />
          <ImageButton
            image={googleIcon}
            className="bg-[#4285F4] md:text-md 2sm:text-[15px] xl:text-lg"
            text="Login with Google"
            onClick={handleLoginWithGoogle}
          />
        </div>
      </div>

      <div className="rounded-xl border shadow-sm w-[100%] relative hidden md:block">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyiNM1dsSbTJOTUDHzB_Y_GXlD1M9OjJA8PMZLHU8Nt9YUs3ZsJ_Rzo9C5fEE9gvej2QrqCEeMYbULxAhlLEtxuqI1rFis0HqM58w9IEfMQDfbu0uT_bP6CVUUJAI9uNRr0ZIRITZeA04u5RWYXDznygGAr4zXhza-iqKg2Xvp8g5Kj_qf4hhitP8MkP2o/s540/background-31584dde.jpg"
          className={`rounded-xl h-[575px] bg-contain bg-no-repeat bg-center w-[100%] sticky`}
        />
        {isLogin ? (
          <h2 className="text-x3l lg:text-4xl absolute top-5 left-5 text-black leading-35 font-medium">
            Unlock a world!
            <br />
            <span className="text-[#a52a2a]">of furniture </span>
            <br />
            Designs
          </h2>
        ) : (
          <h2 className="text-3xl lg:text-4xl absolute top-5 left-5 text-black leading-35 font-medium">
            Furniture is meant
            <br />
            <span className="text-[#a52a2a]"> to be used</span>
            <br />
            and enjoyed
          </h2>
        )}
      </div>
    </div>
  );
};

export default LoginAndSignup;
