import { CART_GET_REQUEST, CART_GET_SUCCESS, CART_GET_FAILURE } from "./actionTypes";

const initialState = {
    cartData: [1,2],
    loading: false,
    error: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_GET_REQUEST:
            return { ...state, loading: true, error: null };
        case CART_GET_SUCCESS:
            return { ...state, loading: false, cartData: action.payload };
        case CART_GET_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
