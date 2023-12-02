import { DATA_GET_REQUEST, DATA_GET_SUCCESS, DATA_GET_FAILURE } from "./actionTypes";

const initialState = {
    productData: [],
    loading: false,
    error: null
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_GET_REQUEST:
            return { ...state, loading: true, error: null };
        case DATA_GET_SUCCESS:
            return { ...state, loading: false, productData: action.payload };
        case DATA_GET_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

