import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import { HomeGoodProductReducer } from "./HomeGoodProducts/reduers";
import { HomeCartProductReducer } from "./Cart/reducer";
import { loginReducer } from "./Auth/reducer";
import { DatalightReducer } from "./DatalighProduct/reducer";
import { JweleryProductReducer } from "./JweleryProducts/reducer";

const rootReducer = combineReducers({
    homeGoodProducts : HomeGoodProductReducer,
    dataLight : DatalightReducer,
    jwelery : JweleryProductReducer,
    cart : HomeCartProductReducer,
    auth : loginReducer
})

export const store =  createStore(
    rootReducer,
    applyMiddleware(thunk)

  
)