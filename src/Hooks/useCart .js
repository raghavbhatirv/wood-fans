// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCartData } from "../Redux/Products/action";

// export const useCart = (userId) => {
//     const dispatch = useDispatch();
//     const cartData = useSelector((store) => store.cartReducer.cartData);

//     useEffect(() => {
//         if (userId) {
//             dispatch(fetchCartData(userId));
//         }
//     }, [userId, cartData, dispatch]);

//     return cartData;
// };
