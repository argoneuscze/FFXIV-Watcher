import {ITEM_SEARCH_FAILURE, ITEM_SEARCH_REQUEST, ITEM_SEARCH_SUCCESS} from "../constants/actionTypes";

const initialState = {
    isFetching: false,
    error_message: '',
    data: []
};

export function itemSearchReducer(state = initialState, action) {
    switch (action.type) {
        case ITEM_SEARCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ITEM_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.items,
                error_message: ''
            };
        case ITEM_SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error_message: action.payload.error
            };
        default:
            return state;
    }
}
