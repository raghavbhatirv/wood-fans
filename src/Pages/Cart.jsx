import { useEffect, useState, useRef } from "react";
import Hero from "../Components/Homepage/Hero";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import Emptycart from "./Emptycart";
import { useSelector } from "react-redux";
import { fetchCartData } from "../Redux/Products/Action";
import { onAuthStateChanged, auth } from "../Services/firebaseConfig";
import Cartitem from "../Components/Cartitem";

const cart = () => {
  const cartDetails = useSelector((store) => store.cartReducer);
  console.log(cartDetails);
  const { cartData } = cartDetails;
  const [cartitemsCount, setCartitemsCount] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(false);

  const [discount, setDiscount] = useState(0.0);
  const [subtotalValue, setSubtotalValue] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  // const [userid, setUserid] = useState(null);
  const isMounted = useRef(true);

  const handleCouponChange = () => {
    if (coupon.toUpperCase() === "TEAM3") {
      setMessage({ text: "You got 30% off!", color: "text-green-600" });
    } else {
      setMessage({ text: "Invalid coupon.", color: "text-red-600" });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (isMounted.current) {
        const userid = user?.uid;
        if (userid) {
        }
      }
    });
    if (cartData?.length > 0) {
      setCartEmpty(false);
      setCartitemsCount(cartData?.length);
    } else {
      setCartEmpty(true);
      setCartitemsCount(0);
    }
  }, [cartitemsCount]);

  const onClickEvent = (action, id) => {
    if (action == "Remove") {
      // Cart Remove Logic
    } else if (action == "Wishlist") {
      //wiSH lIST lOGIC
    } else if (action == "QuantityMinus") {
    } else if (action == "QuantityPlus") {
    }
  };

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
                  <Cartitem
                    title={"LOVELY DAVE"}
                    price={"30000.0"}
                    color={"Black"}
                    image={
                      "https://api.woodfans.ru/storage/uploads/images/x9V57EeEsrvL9zWFSIUSK1766CK76PQ93XjrLDw1_widened_900.webp"
                    }
                    btnonClick={onClickEvent}
                    id={2}
                  />
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
                      {subtotalValue}rs
                    </h2>
                    <h2 className="text-black font-semibold text-base pt-1">
                      {discount}rs
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
                        {cartTotal}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="py-4 border-b-2 border-gray-100">
                  <button className="py-1.5 w-full bg-primary-yellow hover:bg-white hover:border-2 hover:border-primary-yellow text-white hover:text-black font-semibold">
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
