import {ITEM_SEARCH_FAILURE, ITEM_SEARCH_SUCCESS} from "../constants/actionTypes";

export function itemSearchRequest(server, itemName) {
    return dispatch => {
        console.log('fetching')
    }
}

export function itemSearchSuccess(data) {
    return {
        type: ITEM_SEARCH_SUCCESS,
        payload: {
            items: data
        }
    }
}

export function itemSearchFailure(msg) {
    return {
        type: ITEM_SEARCH_FAILURE,
        payload: {
            error: msg
        }
    }
}
