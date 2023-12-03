import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged,auth } from '../Services/firebaseConfig'

export const PrivateRoute = ({ children }) => {
  // const isAuth = useSelector(store => store.authReducer.isAuth)
  const navigate = useNavigate()
  const isMounted = useRef(true);

  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (isMounted.current) {
        setAuthStatus(user);
      }
    });
    return () => {
      isMounted.current = false;
      unsubscribe();
    };
  }, []);



//   if (authStatus){
//     navigate("/login")
//   }
  return children;
};
