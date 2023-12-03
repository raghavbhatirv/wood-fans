import { storeDB, query, collection, getDocs, doc, updateDoc, arrayUnion } from '../../Services/firebaseConfig'
import { DATA_GET_REQUEST, DATA_GET_SUCCESS, DATA_GET_FAILURE, CATEGORY_UPDATE, CART_ADD_REQUEST, CART_ADD_SUCCESS, CART_ADD_FAILURE } from './actionTypes';

export const getDataRequest = () => ({ type: DATA_GET_REQUEST });
export const getDataSuccess = (data) => ({ type: DATA_GET_SUCCESS, payload: data });
export const getDataFailure = (error) => ({ type: DATA_GET_FAILURE, payload: error });
export const categoryChanged = (category) => ({
    type: CATEGORY_UPDATE,
    payload: category,
});

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



export const addToCartRequest = () => ({ type: CART_ADD_REQUEST });
export const addToCartSuccess = (productId) => ({ type: CART_ADD_SUCCESS, payload: productId });
export const addToCartFailure = (error) => ({ type: CART_ADD_FAILURE, payload: error });

export const addToCart = (productId, userId) => async (dispatch) => {
    dispatch(addToCartRequest());
    try {
        const userRef = doc(storeDB, 'users', userId);
        await updateDoc(userRef, {
            cart: arrayUnion(productId)
        });
        dispatch(addToCartSuccess(productId));
    } catch (error) {
        dispatch(addToCartFailure(error));
    }
};
