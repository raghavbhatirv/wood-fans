import { useEffect, useState, useRef } from "react";
import Hero from "../Components/Homepage/Hero";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import Emptycart from "./Emptycart";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartData,
  moveFromCartToWishlist,
} from "../Redux/Products/action";
// import {
//   onAuthStateChanged,
//   auth,
//   doc,
//   storeDB,
// } from "../Services/firebaseConfig";
import Cartitem from "../Components/Cartitem";
import { useDebugValue } from "react";
import { useNavigate } from "react-router-dom";

const cart = () => {
  const cartDetails = useSelector((store) => store.cartReducer);
  const { cartData } = cartDetails;
  const dispatch = useDispatch();
  //   const [cartData, setCartData] = useState([]);
  console.log(cartData);
  const [cartitemsCount, setCartitemsCount] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);

  const [discount, setDiscount] = useState(0.0);
  const [subtotalValue, setSubtotalValue] = useState(30000);
  const [cartTotal, setCartTotal] = useState(30000);
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [originalPrice, setOriginalPrice] = useState(subtotalValue); // assuming subtotalValue is defined

  const updateQuantity = (quantity) => {
    setSubtotalValue(originalPrice * quantity);
  };

  const [cart, setCart] = useState(cartData);
  const navigate = useNavigate();
  const handleCouponChange = () => {
    if (coupon.toUpperCase() === "TEAM3") {
      setMessage({ text: "You got 30% off!", color: "text-green-600" });
      setDiscount(subtotalValue * 0.3);
      let newTotal = subtotalValue - subtotalValue * 0.3;
      setCartTotal(newTotal);
    } else {
      setMessage({ text: "Invalid coupon.", color: "text-red-600" });
    }
  };

  useEffect(() => {
    setCart(cartData);
    if (cartData?.length > 0) {
      setCartEmpty(false);
      setCartitemsCount(cartData.length);
    } else {
      setCartEmpty(true);
      setCartitemsCount(0);
    }
  }, [cartData]);

  const btnonClick = (action, id, userId) => {
    if (action == "Remove") {
      // Cart Remove Logic
      dispatch(moveFromCartToWishlist(id, userId));
      const updatedCart = cartData.filter((product) => product.id === id);
      setCart(updatedCart);
    } else if (action == "Wishlist") {
      //wiSH lIST lOGIC
    } else if (action == "QuantityMinus") {
    } else if (action == "QuantityPlus") {
    }
  };

  const toCheckout = () => {
    localStorage.setItem("cartTotal", cartTotal);
    navigate("/checkout");
  };
  //   const getCartData = async (userId) => {
  //     try {
  //       const userRef = doc(storeDB, "users", userId);
  //       const userSnap = await getDoc(userRef);
  //       const userData = userSnap.data();
  //       const cartData = userData.cart;
  //       setCartData(cartData);
  //       console.log(cartData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getCartData();
  //   }, [userId]);
  return (
    <div className="w-full bg-gray-100">
      {cartEmpty ? (
        <Emptycart />
      ) : (
        <div className="w-11/12 m-auto">
          <div className="py-8">
            <h2 className="text-3xl font-semibold uppercase">Cart</h2>
          </div>
          <div className="flex justify-between gap-4 pb-10 max-md:flex-wrap">
            <div className="w-9/12 bg-white rounded-lg max-lg:w-3/5 max-md:w-full">
              <div className="p-6">
                <h2 className="text-primary-yellow font-semibold text-lg">
                  Your Cart
                </h2>
              </div>
              <div className="p-6">
                <div className="flex justify-between p-2 border-b-2 border-gray-100">
                  <div className="w-5/12">
                    <h2 className="font-semibold text-gray-700">Items</h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-700">Quantity</h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-700">Price</h2>
                  </div>
                </div>
                {/* Items Here */}
                <div>
                  {cart.map((Product, index) => (
                    <Cartitem
                      key={index}
                      Productid={Product.productId}
                      btnonClick={btnonClick}
                      updateQuantity={updateQuantity}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-3/12 max-lg:w-2/5 max-md:w-full">
              <div className="p-6 bg-white rounded-lg">
                <div className="border-b-2 border-gray-100 pb-2">
                  <h2 className="text-primary-yellow font-semibold text-lg">
                    Order Summary
                  </h2>
                </div>
                <div className="flex justify-between py-4 border-b-2 border-gray-100">
                  <div className="text-left">
                    <h2 className="text-black font-medium text-base">
                      SubTotal ({cartitemsCount} items)
                    </h2>
                    <h2 className="text-black font-medium text-base pt-1">
                      Discount
                    </h2>
                  </div>
                  <div className="text-right">
                    <h2 className="text-black font-semibold text-base">
                      Rs. {subtotalValue}
                    </h2>
                    <h2 className="text-black font-semibold text-base pt-1">
                      Rs. {discount}
                    </h2>
                  </div>
                </div>
                <div className="pt-4 pb-3 border-b-2 border-gray-100">
                  <div className="flex border border-black">
                    <input
                      type="text"
                      className={`${message.color} text-sm w-8/12 focus:outline-none px-1`}
                      placeholder="Use TEAM3 to get 30% off"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value);
                      }}
                    />
                    <button
                      onClick={handleCouponChange}
                      className="text-white font-medium w-4/12 py-1.5 bg-black"
                    >
                      Submit
                    </button>
                  </div>
                  <p className={`mt-2 text-sm ${message.color}`}>
                    <span className="font-medium">{message.text}</span>
                  </p>
                </div>
                <div className="py-4 border-b-2 border-gray-100">
                  <div className="flex justify-between">
                    <div className="text-left">
                      <h1 className="text-black uppercase font-semibold text-lg">
                        Total
                      </h1>
                    </div>
                    <div className="text-right">
                      <h1 className="text-black uppercase font-semibold text-lg">
                        Rs. {cartTotal}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="py-4 border-b-2 border-gray-100">
                  <button
                    className="py-1.5 w-full bg-primary-yellow hover:bg-white hover:border-2 hover:border-primary-yellow text-white hover:text-black font-semibold"
                    onClick={toCheckout}
                  >
                    Procced To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <BuyersChoice title={"View More"} />
          </div>
        </div>
      )}
    </div>
  );
};
export default cart;
