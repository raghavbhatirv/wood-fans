import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from "./ProductReducer/productReducer";




// You can remove the reducer as well as initalState. it jsut write testing perpose.

// <<
const initalState = {
     count: 0
}

const reducer =(state=initalState,action)=>{
     return state
}
// >>


// You can add your own reducer in the combineReducers

const rootReducer = combineReducers({reducer, productReducer})

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store }