import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import { HomeGoodProductReducer } from "./HomeGoodProducts/reduers";
import { HomeCartProductReducer } from "./Cart/reducer";
import { loginReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
    homeGoodProducts : HomeGoodProductReducer,
    cart : HomeCartProductReducer,
    auth : loginReducer
})

export const store =  createStore(
    rootReducer,
    applyMiddleware(thunk)

  
)