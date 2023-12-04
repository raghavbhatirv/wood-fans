import { storeDB, query, collection, getDoc, getDocs, doc, updateDoc, arrayUnion, arrayRemove, writeBatch } from '../../Services/firebaseConfig'
import { DATA_GET_REQUEST, DATA_GET_SUCCESS, DATA_GET_FAILURE, CART_GET_REQUEST, CART_GET_SUCCESS, CART_GET_FAILURE, WISHLIST_GET_REQUEST, WISHLIST_GET_SUCCESS, WISHLIST_GET_FAILURE } from './actionTypes';

export const getDataRequest = () => ({ type: DATA_GET_REQUEST });
export const getDataSuccess = (data) => ({ type: DATA_GET_SUCCESS, payload: data });
export const getDataFailure = (error) => ({ type: DATA_GET_FAILURE, payload: error });


export const fetchData = () => async (dispatch) => {
    dispatch(getDataRequest());
    try {
        let tempData = [];
        const q = query(collection(storeDB, "products"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((product) => {
            tempData.push({ ...product.data(), id: product.id });
        });
        dispatch(getDataSuccess(tempData));
    } catch (error) {
        dispatch(getDataFailure(error));
    }
};

// Do not use in cart page.
export const addToCart = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        const cart = userData.cart;
        const cartItem = cart.find(item => item.productId === productId);

        if (cartItem) {
            cartItem.quantity += 1;
            await updateDoc(userRef, { cart: cart });
        } else {
            await updateDoc(userRef, {
                cart: arrayUnion({ productId, quantity: 1 })
            });
        }
    } catch (error) {
        console.log(error);
    }
};


// Do not use in cart page.
export const addToWishlist = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        await updateDoc(userRef, {
            wishlist: arrayUnion(productId)
        });
    } catch (error) {
        console.log(error);
    }
};

// moveFromWishlistToCart
export const moveFromWishlistToCart = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const batch = writeBatch(storeDB);

        // Add to cart
        batch.update(userRef, {
            cart: arrayUnion({ productId, quantity: 1 })
        });

        // Remove from wishlist
        batch.update(userRef, {
            wishlist: arrayRemove(productId)
        });

        await batch.commit();
    } catch (error) {
        console.log(error);
    }
};


export const increaseQuantityInCart = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
        const cart = userData.cart.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );

        await updateDoc(userRef, { cart });
    } catch (error) {
        console.log(error);
    }
};

export const decreaseQuantityInCart = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
        const cart = userData.cart.map(item =>
            item.productId === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        );

        await updateDoc(userRef, { cart });
    } catch (error) {
        console.log(error);
    }
};




// Use in cart page
export const removeFromWishlist = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        await updateDoc(userRef, {
            wishlist: arrayRemove(productId)
        });
    } catch (error) {
        console.log(error);
    }
};

// moveFromCartToWishlist

export const moveFromCartToWishlist = (productId, userId) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const batch = writeBatch(storeDB);

        // Add to wishlist
        batch.update(userRef, {
            wishlist: arrayUnion(productId)
        });

        // Remove from cart
        batch.update(userRef, {
            cart: arrayRemove(productId)
        });

        await batch.commit();
    } catch (error) {
        console.log(error);
    }
};

export const getCartDataRequest = () => ({ type: CART_GET_REQUEST });
export const getCartDataSuccess = (data) => ({ type: CART_GET_SUCCESS, payload: data });
export const getCartDataFailure = (error) => ({ type: CART_GET_FAILURE, payload: error });

export const fetchCartData = (userId) => async (dispatch) => {
    dispatch(getCartDataRequest());
    try {
        const userRef = doc(storeDB, 'users', userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        const cartData = userData.cart;
        dispatch(getCartDataSuccess(cartData));
    } catch (error) {
        console.log(error);
        dispatch(getCartDataFailure(error));
    }
};


export const getWishlistDataRequest = () => ({ type: WISHLIST_GET_REQUEST });
export const getWishlistDataSuccess = (data) => ({ type: WISHLIST_GET_SUCCESS, payload: data });
export const getWishlistDataFailure = (error) => ({ type: WISHLIST_GET_FAILURE, payload: error });

export const fetchWishlistData = (userId) => async (dispatch) => {
    dispatch(getWishlistDataRequest());
    try {
        const userRef = doc(storeDB, 'users', userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        const wishlistData = userData.wishlist;
        dispatch(getWishlistDataSuccess(wishlistData));
    } catch (error) {
        console.log(error);
        dispatch(getWishlistDataFailure(error));
    }
};


export const postData = (dataArray) => async (dispatch) => {
    try {
        const batch = writeBatch(storeDB);
        dataArray.forEach((data) => {
            const docRef = doc(collection(storeDB, "products"));
            batch.set(docRef, data);
        });
        await batch.commit();
    } catch (error) {
        console.log(error);
    }
};
