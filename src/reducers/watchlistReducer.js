import {WATCHLIST_ADD, WATCHLIST_REMOVE} from "../constants/actionTypes";

const initialState = {
    items: {}
};

export function watchlistReducer(state = initialState, action) {
    switch (action.type) {
        case WATCHLIST_ADD:
            return {
                ...state,
                items: {...state.items, [action.payload.id]: action.payload.name}
            };
        case WATCHLIST_REMOVE:
            const {[action.payload.id]: a, ...rest} = state.items;
            return {
                ...state,
                items: rest
            };
        default:
            return state;
    }
}
