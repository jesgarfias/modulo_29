import { combineReducers } from "redux";
import cartReducer from "./CartItems";
import productsReducer from "./ProducList";

const rootReducer=combineReducers({
    cartState:cartReducer,
    productState:productsReducer,
})

export default rootReducer;