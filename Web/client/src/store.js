import { applyMiddleware,combineReducers,legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./redux/CartReducer/reducer";
const rootReducer= combineReducers({
    CartReducer
})
const composeEnhancers=compose
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));