import { storeDB, query, collection, getDocs } from '../../Services/firebaseConfig'
import { DATA_GET_REQUEST, DATA_GET_SUCCESS, DATA_GET_FAILURE } from './actionTypes';

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


