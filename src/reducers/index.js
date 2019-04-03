import {combineReducers} from "redux";
import {itemSearchReducer} from "./itemSearchReducer";
import {watchlistReducer} from "./watchlistReducer";

export default combineReducers({
    search: itemSearchReducer,
    watchlist: watchlistReducer
})
