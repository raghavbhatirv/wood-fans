import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import shoppingbag from "../../../assets/shoppingbag.svg";
import Button from "../Button";
import { fetchCartData } from "../../../Redux/Products/action";
import { fetchUserData } from "../common";

const Navbar = () => {
  const { cartData } = useSelector((store) => store.cartReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState("");

  const [search, setSearch] = useState("");
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [cartValue, setCartValue] = useState(0);
  const [authStatus, setAuthStatus] = useState(null);
  let userName = userData?.name?.split(" ");
  const isMounted = useRef(true);
  useEffect(() => {
    if (uid) {
      setAuthStatus(true);
      dispatch(fetchCartData(uid));
    }
  }, [uid]);

  useEffect(() => {
    if (cartData?.length > 0) {
      setCartValue(cartData.length);
    }
  }, [cartData]);

  // Firebase get user

  useEffect(() => {
    let unsubscribe;

    fetchUserData(setUid, setUserData).then((unsub) => {
      unsubscribe = unsub;
    });

    return () => unsubscribe && unsubscribe();
  }, []);

  // Mobile menu and navigator functions.
  const toggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };
  const mobileMenuLoginBtn = () => {
    navigate("/login");
    setMobileMenuActive(false);
  };
  const searchData = () => {};
  const toHome = () => {
    navigate("/");
  };
  const handleVisitProfile = () => {
    navigate("/user/profile");
  };
  const toCartPage = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div id={styles["navbar-id"]} className="max-sm:bg-gray-200 shadow">
        <div className="mx-auto w-11/12 flex items-center">
          <div onClick={toHome} className="w-1/12 ">
            <img className="w-12 hover:cursor-pointer" src={logo}></img>
          </div>
          <div className="w-11/12">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div>
                  <ul className="list-none flex max-lg:hidden">
                    <a href="/">
                      <li className="px-4 py-2 text-sm  hover:text-primary-yellow">
                        About Productions
                      </li>
                    </a>
                    <a href="/">
                      <li className="px-4 py-2 text-sm  hover:text-primary-yellow">
                        Shipping & Payment
                      </li>
                    </a>
                    <a href="/">
                      <li className="px-4 py-2 text-sm  hover:text-primary-yellow">
                        blog
                      </li>
                    </a>
                    <a href="/">
                      <li className="px-4 py-2 text-sm  hover:text-primary-yellow">
                        Portfolio
                      </li>
                    </a>
                    <a href="/">
                      <li className="px-4 py-2 text-sm  hover:text-primary-yellow">
                        Contacts
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="flex justify-between items-center gap-3.5">
                  {/* <div className="border border-solid border-gray-200 rounded-md max-xl:hidden p-1.5 bg-white flex items-center">
                    <input
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      className="w-40 focus:outline-none rounded-md text-xs"
                      type="text"
                      placeholder="Search product"
                    />

                    <a onClick={searchData} href="#">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    
                  </div> */}

                  <div className="max-sm:hidden">
                    {authStatus ? (
                      <p
                        className=" font-medium text-sm cursor-pointer"
                        onClick={handleVisitProfile}
                      >
                        Hello, {userName ? userName[0] : "Loading..."}
                      </p>
                    ) : (
                      <Link to="/login">
                        <p className="text-sm font-semibold max-sm:text-base">
                          Login/SignUp
                        </p>
                      </Link>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="relative">
                      {/* <Link to="/cart"> */}
                      <img
                        className="w-8 max-sm:w-9 hover:cursor-pointer"
                        onClick={toCartPage}
                        src={shoppingbag}
                      ></img>
                      {/* </Link> */}
                      <p className="text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-yellow-400 text-center rounded-full mt-[-7px] ml-2.5 px-1.5 py-0.5">
                        {cartValue}
                      </p>
                    </div>
                    <div className="lg:hidden">
                      {isMobileMenuActive ? (
                        <a onClick={toggleMobileMenu}>
                          <i className="fa-solid fa-xmark text-3xl"></i>
                        </a>
                      ) : (
                        <a onClick={toggleMobileMenu}>
                          <i className="fa-solid fa-bars text-3xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pt-5 max-sm:hidden">
              <div className="flex justify-between items-center">
                <div className=" max-lg:invisible">
                  <ul className="list-none flex">
                    <Link to="/products/SOFAS">
                      <li className="px-4 py-2 text-base uppercase hover:opacity-50">
                        Sofa's
                      </li>
                    </Link>
                    <Link to="/products/BEDS">
                      <li className="px-4 py-2 text-base uppercase hover:opacity-50">
                        Beds
                      </li>
                    </Link>
                    <Link to="/products/CHILDREN'S FURNITURE">
                      <li className="px-4 py-2 text-base uppercase hover:opacity-50">
                        Children furniture
                      </li>
                    </Link>
                    <Link to="/products/ARMCHAIRS AND POUFS">
                      <li className="px-4 py-2 text-base uppercase hover:opacity-50">
                        ARMCHAIRS AND POUFS
                      </li>
                    </Link>
                    <Link to="/products/all">
                      <li className="px-4 py-2 text-base uppercase hover:opacity-50">
                        Products
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="text-right">
                  <p className=" font-bold text-sm">+7 (926) 787-11-00</p>
                  <p className="text-sm">Modern Furniture factory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuActive ? styles.mobileMenu_active : styles.mobile_menu
        } hidden max-lg:block`}
      >
        <div className="p-4">
          <div>
            <ul className="list-none">
              <Link
                onClick={(event) => categoryChangeInStore(event, "SOFAS")}
                to="/product"
              >
                <li className="px-4 py-2 uppercase text-white text-2xl">
                  Sofa's
                </li>
              </Link>
              <Link
                onClick={(event) => categoryChangeInStore(event, "BEDS")}
                to="/product"
              >
                <li className="px-4 py-2 uppercase  text-white text-2xl">
                  Beds
                </li>
              </Link>
              <Link
                onClick={(event) =>
                  categoryChangeInStore(event, "CHILDREN'S FURNITURE")
                }
                to="/product"
              >
                <li className="px-4 py-2 uppercase  text-white text-2xl">
                  Children furniture
                </li>
              </Link>
              <Link
                onClick={(event) =>
                  categoryChangeInStore(event, "ARMCHAIRS AND POUFS")
                }
                to="/product"
              >
                <li className="px-4 py-2 uppercase  text-white text-2xl">
                  Chairs
                </li>
              </Link>
              <Link
                onClick={(event) => categoryChangeInStore(event, null)}
                to="/product"
              >
                <li className="px-4 py-2 uppercase  text-white text-2xl">
                  Standards
                </li>
              </Link>
            </ul>
            <ul className="list-none">
              <a href="/">
                <li className="px-4 py-2 font-medium text-sm">
                  Shipping & Payment
                </li>
              </a>
              <a href="/">
                <li className="px-4 py-2 font-medium text-sm">
                  About Productions
                </li>
              </a>
              <a href="/">
                <li className="px-4 py-2 font-medium text-sm">Blog</li>
              </a>
              <a href="/">
                <li className="px-4 py-2 font-medium text-sm">Portfolio</li>
              </a>
              <a href="/">
                <li className="px-4 py-2 font-medium text-sm">Contacts</li>
              </a>
            </ul>
          </div>
          <div></div>
          <div className="text-center py-2">
            <div className="pt-1 pb-6">
              {authStatus ? (
                <p className=" font-medium text-lg">
                  Hello, {userName ? userName[0] : "Loading..."}
                </p>
              ) : (
                <Link to="/login">
                  <Button
                    text="Login/Signup"
                    type="button"
                    onClick={mobileMenuLoginBtn}
                    className={` text-[16px] bg-dark text-white`}
                  />
                </Link>
              )}
            </div>
            <p className="font-bold text-lg text-white">+7 (926) 787-11-00</p>
            <p className="text-lg text-gray italic">Modern Furniture factory</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
