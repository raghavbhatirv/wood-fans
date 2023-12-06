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
        dispatch(fetchCartData(userId));
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

export const removeFromWishlist = (productId, userId, moveToCart) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const batch = writeBatch(storeDB);

        // Remove from wishlist
        batch.update(userRef, {
            wishlist: arrayRemove(productId)
        });

        // Conditionally add to cart
        if (moveToCart) {
            batch.update(userRef, {
                cart: arrayUnion({ productId, quantity: 1 })
            });
        }

        await batch.commit();
        // Optionally, dispatch actions to update the state in your Redux store
        dispatch(fetchWishlistData(userId));
        if (moveToCart) {
            dispatch(fetchCartData(userId));
        }
    } catch (error) {
        console.log(error);
    }
};

export const adjustQuantityInCart = (productId, userId, adjustment) => async (dispatch) => {
    try {
        const userRef = doc(storeDB, 'users', userId);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
        const cart = userData.cart.map(item =>
            item.productId === productId ? { ...item, quantity: Math.max(0, item.quantity + adjustment) } : item
        );

        await updateDoc(userRef, { cart });
        dispatch(fetchCartData(userId));
    } catch (error) {
        console.log(error);
    }
};


export const removeFromCart = (productId, userId, wishlist) => async (dispatch) => {
    try {
        // Reference to the user's document in the database
        const userRef = doc(storeDB, 'users', userId);
        // Retrieve the user's data
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();

        // Check if the product is in the cart
        const productInCart = userData.cart.find(item => item.productId === productId);

        if (productInCart) {
            // Start a batch write operation
            const batch = writeBatch(storeDB);

            // Remove the product from the cart
            const newCart = userData.cart.filter(item => item.productId !== productId);
            batch.update(userRef, { cart: newCart });

            // If wishlist is true, add the product to the wishlist
            if (wishlist) {
                batch.update(userRef, {
                    wishlist: arrayUnion(productId)
                });
            }

            // Commit the batch write to the database
            await batch.commit();
            // Fetch the updated cart data
            dispatch(fetchCartData(userId));
        } else {
            console.log(`Product with id ${productId} not found in cart.`);
        }

    } catch (error) {
        console.log(error);
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
