import {WATCHLIST_FETCH_FAILURE, WATCHLIST_FETCH_REQUEST, WATCHLIST_FETCH_SUCCESS} from "../constants/actionTypes";

const initialState = {
    isFetching: false,
    error_message: '',
    data: []
};

export function watchlistFetchReducer(state = initialState, action) {
    switch (action.type) {
        case WATCHLIST_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case WATCHLIST_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.items,
                error_message: ''
            };
        case WATCHLIST_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error_message: action.payload.error
            };
        default:
            return state;
    }
}
