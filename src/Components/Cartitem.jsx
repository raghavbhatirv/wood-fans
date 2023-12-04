import { useEffect, useState } from "react";
import Button from "./Common/Button";
import { storeDB, getDoc, auth, doc } from "../Services/firebaseConfig";

const Cartitem = ({Productid}) => {
    const [cartItemData, setCartItemData] = useState({});
    console.log(Productid);
    useEffect(() => {
        const fetchProductData = async () => {
          try {
            const productDocRef = doc(storeDB, "products", Productid);
            const productDocSnapshot = await getDoc(productDocRef);
            if (productDocSnapshot.exists()) {
                console.log(productDocSnapshot.data())
                setCartItemData({ id: Productid, ...productDocSnapshot.data()});
            } else {
              console.log("No such document!");
            }
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
        };

        fetchProductData();
      }, [Productid]);
      console.log(cartItemData);
    // const [originalprice, setOriginal] = useState(0);
    // const [discount, setDiscount] = useState(0);
    // const [quantity, setQuantity] = useState(1);

    // const generateStrikethroughPrice = (price) => {
    //     const discountPercentage = Math.floor(Math.random() * (50 - 40 + 1) + 40);
    //     setDiscount(discountPercentage)
    //     const discountedPrice = price *1.5;
    //     setOriginal(discountedPrice);
    // }
    // useEffect(() => {
    //     generateStrikethroughPrice(price);
    // }, [])
    return (
        <div className="bg-gray-100 rounded-lg my-2 p-2">
            {/* <div className="flex justify-between items-center">
                <div className="flex W-5/12 items-center">
                    <div className="w-32">
                        <img className="object-cover max-w-full max-h-full " src={image}></img>
                    </div>
                    <div className="px-2">
                        <p className="font-semibold text-xl">{title}</p>
                        <p className="font-normal text-sm opacity-60">{color}</p>
                        <div className="flex gap-2 py-5">
                            <button onClick={() => { btnonClick("Remove", id) }} className="text-xs bg-primary-yellow p-1 rounded-sm cursor-pointer hover:text-white">Remove From Cart</button>
                            <button onClick={() => { btnonClick("Wishlist", id) }} className="text-xs bg-primary-yellow p-1 rounded-sm text-white cursor-pointer hover:text-black">Move To WishList</button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="flex justify-between w-20">
                        <button className="bg-black text-white rounded-md w-7 " onClick={() => { btnonClick("QuantityPlus", id) }}>+</button>
                        <h2 className="font-semibold">{quantity}</h2>
                        <button className="bg-black text-white rounded-md w-6" onClick={() => { btnonClick("QuantityMinus", id) }}>-</button>
                    </div>
                </div>
                <div className="text-right">
                    <h2 className="font-semibold">{price}₹</h2>
                    <h2 className="opacity-50 line-through">{originalprice}₹</h2>
                    <h2 className="text-green-500">{discount}%</h2>
                </div>
            </div> */}
        </div>
    )
}
export default Cartitem;