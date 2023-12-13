import { useEffect, useState, useRef } from "react";
import BuyersChoice from "../Components/Homepage/BuyersChoice";
import Emptycart from "./Emptycart";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Products/action";
import Cartitem from "../Components/Cartitem";
import { useNavigate } from "react-router-dom";
import { fetchPricesAndCalculateSubtotal } from "../Components/Common/common";

const cart = () => {
  const { cartData } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();
  const [cartItemsCount, setcartItemsCount] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [discount, setDiscount] = useState(0.0);
  const [subtotalValue, setSubtotalValue] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCouponChange = (couponCode, subtotal) => {
    const upperCoupon = couponCode.toUpperCase();
    return upperCoupon === "TEAM3"
      ? {
          text: "You got 30% off!",
          color: "text-green-600",
          discount: subtotal * 0.3,
        }
      : { text: "Invalid coupon.", color: "text-red-600", discount: 0 };
  };

  useEffect(() => {
    const { length } = cartData || [];
    setCartEmpty(length === 0);
    setcartItemsCount(length);
    fetchPricesAndCalculateSubtotal(cartData, setSubtotalValue, setCartTotal);
  }, [cartData]);

  const btnOnClick = (action, id, userId) => {
    if (action === "Remove") {
      dispatch(removeFromCart(id, userId));
    } else if (action === "Wishlist") {
      dispatch(removeFromCart(id, userId, true));
    }
  };

  const toCheckout = () => navigate("/checkout");

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
                  {cartData.map((product, index) => (
                    <Cartitem
                      key={index}
                      product={product}
                      btnOnClick={btnOnClick}
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
                      SubTotal ({cartItemsCount} items)
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
