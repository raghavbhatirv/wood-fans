import { WISHLIST_GET_REQUEST, WISHLIST_GET_SUCCESS, WISHLIST_GET_FAILURE } from "./actionTypes";

const initialState = {
    wishlistData: [],
    loading: true, // Set initial loading state to true
    error: null,
};

export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case WISHLIST_GET_REQUEST:
            return { ...state, loading: true, error: null };
        case WISHLIST_GET_SUCCESS:
            return { ...state, loading: false, wishlistData: action.payload };
        case WISHLIST_GET_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
