import {WATCHLIST_ADD, WATCHLIST_REMOVE} from "../constants/actionTypes";

export function watchlistAdd(item) {
    return {
        type: WATCHLIST_ADD,
        payload: {
            id: item.ID,
            name: item.name
        }
    }
}

export function watchlistRemove(id) {
    return {
        type: WATCHLIST_REMOVE,
        payload: {
            id: id
        }
    }
}
