import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { themeReducer } from './Theme/themeReducer'
import { authReducer } from './Auth/authReducer'
import { dataReducer } from "./Products/dataReducer"
import { cartReducer } from "./Products/cartDataReducer"


// You can add your own reducer in the combineReducers

const rootReducer = combineReducers({ themeReducer, authReducer, dataReducer, cartReducer })

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store }