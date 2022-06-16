import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import { HomeGoodProductReducer } from "./HomeGoodProducts/reduers";
import { HomeCartProductReducer } from "./Cart/reducer";

const rootReducer = combineReducers({
    homeGoodProducts : HomeGoodProductReducer,
    cart : HomeCartProductReducer
})

export const store =  createStore(
    rootReducer,
    applyMiddleware(thunk)

  
)