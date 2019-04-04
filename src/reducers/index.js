import {combineReducers} from "redux";
import {itemSearchReducer} from "./itemSearchReducer";
import {watchlistReducer} from "./watchlistReducer";
import {watchlistFetchReducer} from "./watchlistFetchReducer";

export default combineReducers({
    search: itemSearchReducer,
    watchlist: watchlistReducer,
    watchlist_fetch: watchlistFetchReducer
})
