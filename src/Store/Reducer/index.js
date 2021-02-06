import { combineReducers } from "redux";
import getProduct from "./Product";

export default combineReducers({
    data: getProduct
})