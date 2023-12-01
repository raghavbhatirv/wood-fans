import { FORGOT_PASSWORD_FAILURE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./actionType"

const initalState = {
     isAuth: false,
     successMessage: "",
     errorMessage: "",
     loading: false
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

          default:
               return initalState
     }
}
