import {combineReducers} from "redux";
import {itemSearchReducer} from "./itemSearchReducers";

export default combineReducers({
    search: itemSearchReducer
})
