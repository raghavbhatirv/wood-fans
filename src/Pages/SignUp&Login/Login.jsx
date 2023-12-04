import React, { useState } from "react";
import InputFeild from "../../Components/Common/InputFeild";
import Button from "../../Components/Common/Button";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmailAndPassword } from "../../Redux/Auth/action";
import { toast } from "react-toastify";
import { stringify } from "postcss";
import { useNavigate } from "react-router-dom";


const Login = ({ onClick }) => {
  const theme = useSelector((store) => store.themeReducer.theme);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginWithEmailAndPassword(email, password, redirectToHome));

   
    // RememberMe functionalites
    /*
    if (rememberMe) {
      localStorage.setItem(
        "rememberMeUser",
        JSON.stringify({ email, password })
      );
    } else {
      localStorage.removeItem("rememberMeUser");
    }
    */
  };

  return (
    <>
      <h1 className="mb-5 md:mb-10 font-semibold text-3xl mt-2">Login</h1>
      {/* Sign Up From */}
      <form onSubmit={handleSubmit}>
        <InputFeild
          placeholder="Email"
          icon={faEnvelope}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          error={"It should be a valid email address!"}
          value={email}
        />
        <InputFeild
          placeholder="Password"
          icon={faLock}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          error={"Passwords don't match!"}
          value={password}
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              value="Remember"
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span>Remember me</span>
          </div>
          <span>Forget Password?</span>
        </div>
        <Button
          text="Login"
          className={`bg-primary-yellow text-[16px] mt-5 hover:border-primary-yellow hover:text-primary-yellow`}
          type="submit"
        />
      </form>
      <Button
        text="Don't have an account? Signup"
        className={`mt-3  text-[16px] ${
          theme
            ? "bg-gray-200 text-black hover:border-gray-200"
            : "bg-dark text-white"
        }`}
        type="button"
        onClick={onClick}
      />
   
    </>
  );
};

export default Login;
