import { FORGOT_PASSWORD_FAILURE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, FORGOT_PASSWORD_SUCCESS, SET_USER_DATA_REQUEST, SET_USER_DATA_SUCCESS, SET_USER_DATA_FAILURE } from "./actionType"

const initalState = {
     isAuth: false,
     successMessage: "",
     errorMessage: "",
     loading: false,
     uid: null,
     userData: null
}
export const authReducer = (state = initalState, { type, payload }) => {
     switch (type) {
          case LOGIN_REQUEST:
               return {
                    ...state,
                    loading: true
               }
          case LOGIN_SUCCESS:
               return {
                    ...state,
                    isAuth: true,
                    successMessage: payload,
                    loading: false
               }
          case LOGIN_FAILURE:
               return {
                    ...state,
                    loading: false,
                    errorMessage: payload
               }

          case SIGN_UP_REQUEST:
               return {
                    ...state,
                    loading: true
               }
          case SIGN_UP_SUCCESS:
               return {
                    ...state,
                    isAuth: true,
                    successMessage: payload,
                    loading: false
               }
          case SIGN_UP_FAILURE:
               return {
                    ...state,
                    loading: false,
                    errorMessage: payload
               }
          case FORGOT_PASSWORD_FAILURE:
               return {
                    ...state,
                    errorMessage: payload
               }
          case FORGOT_PASSWORD_SUCCESS:
               return {
                    ...state,
                    successMessage: payload
               }
          case SET_USER_DATA_REQUEST:
               return {
                    ...state,
                    loading: true
               }
          case SET_USER_DATA_SUCCESS:
               return {
                    ...state,
                    uid: payload.uid,
                    userData: payload.userData,
                    loading: false
               }
          case SET_USER_DATA_FAILURE:
               return {
                    ...state,
                    loading: false,
                    errorMessage: payload
               }

          default:
               return initalState
     }
}
