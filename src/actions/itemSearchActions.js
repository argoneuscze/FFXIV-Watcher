import {ITEM_SEARCH_FAILURE, ITEM_SEARCH_REQUEST, ITEM_SEARCH_SUCCESS} from "../constants/actionTypes";

export function itemSearchFetch(server, itemName) {
    return dispatch => {
        dispatch(itemSearchStart());

        // TODO axios get api
        // e.g. https://xivapi.com/search?indexes=Item&string=rakshasa%20ring

        // debug for now
        const data = {
            "Pagination": {
                "Page": 1,
                "PageNext": null,
                "PagePrev": null,
                "PageTotal": 1,
                "Results": 5,
                "ResultsPerPage": 100,
                "ResultsTotal": 5
            },
            "Results": [{
                "ID": 23841,
                "Icon": "\/i\/048000\/048247.png",
                "Name": "Rakshasa Ring of Fending",
                "Url": "\/Item\/23841",
                "UrlType": "Item",
                "_": "item",
                "_Score": 1
            }, {
                "ID": 23842,
                "Icon": "\/i\/048000\/048247.png",
                "Name": "Rakshasa Ring of Slaying",
                "Url": "\/Item\/23842",
                "UrlType": "Item",
                "_": "item",
                "_Score": 1
            }, {
                "ID": 23843,
                "Icon": "\/i\/048000\/048247.png",
                "Name": "Rakshasa Ring of Aiming",
                "Url": "\/Item\/23843",
                "UrlType": "Item",
                "_": "item",
                "_Score": 1
            }, {
                "ID": 23844,
                "Icon": "\/i\/048000\/048247.png",
                "Name": "Rakshasa Ring of Healing",
                "Url": "\/Item\/23844",
                "UrlType": "Item",
                "_": "item",
                "_Score": 1
            }, {
                "ID": 23845,
                "Icon": "\/i\/048000\/048247.png",
                "Name": "Rakshasa Ring of Casting",
                "Url": "\/Item\/23845",
                "UrlType": "Item",
                "_": "item",
                "_Score": 1
            }],
            "SpeedMs": 6
        };

        const items = data.Results.map(val => {
            return {ID: val.ID, name: val.Name};
        });

        dispatch(itemSearchSuccess(items));
    }
}

function itemSearchStart() {
    return {
        type: ITEM_SEARCH_REQUEST
    }
}

function itemSearchSuccess(data) {
    return {
        type: ITEM_SEARCH_SUCCESS,
        payload: {
            items: data
        }
    }
}

function itemSearchFailure(msg) {
    return {
        type: ITEM_SEARCH_FAILURE,
        payload: {
            error: msg
        }
    }
}
