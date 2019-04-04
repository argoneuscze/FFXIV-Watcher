import {WATCHLIST_FETCH_FAILURE, WATCHLIST_FETCH_REQUEST, WATCHLIST_FETCH_SUCCESS} from "../constants/actionTypes";

export function watchlistFetchAll(server) {
    return (dispatch, getState) => {
        const {watchlist} = getState();
        dispatch(watchlistFetchRequest());

        const item_ids = Object.keys(watchlist.items);

        // TODO axios get api using item_ids and server
        // https://xivapi.com/market/items?servers=Brynhildr&ids=23841,23844&max_history=1

        // DEBUG
        const server = 'Brynhildr';
        const data = [{
            "Brynhildr": {
                "History": [{
                    "Added": 1554324491,
                    "CharacterID": "a0986427-ad02-45b7-b5ba-aa19584b360b",
                    "CharacterName": "Aleron Cythril",
                    "ID": "d976ee0304c7b19eb175c5fda47c4d85ad0f6920",
                    "IsHQ": true,
                    "PricePerUnit": 557000,
                    "PriceTotal": 557000,
                    "PurchaseDate": 1554318699,
                    "PurchaseDateMS": "1554318699000",
                    "Quantity": 1
                }],
                "ID": "10_23841",
                "Item": {
                    "ID": 23841,
                    "Icon": "/i/048000/048247.png",
                    "LevelItem": 380,
                    "Name": "Rakshasa Ring of Fending",
                    "Name_de": "Rakshasa-Ring der Verteidigung",
                    "Name_en": "Rakshasa Ring of Fending",
                    "Name_fr": "Bague rakshasa de protecteur",
                    "Name_ja": "\u7f85\u5239\u6307\u8f2a\u3010\u6b66\u58eb\u3011",
                    "Rarity": 2
                },
                "ItemID": 23841,
                "Prices": [{
                    "Added": 1554324491,
                    "CreatorSignatureID": "10020008-4ec5-409c-b709-e661a0368ac5",
                    "CreatorSignatureName": "Jezabella Moretz",
                    "ID": "7cf8e4773fc597175d7f3006947529ec3120485e",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 558995,
                    "PriceTotal": 558995,
                    "Quantity": 1,
                    "RetainerID": "441d25e0-c0ec-4421-a39c-f278090da34f",
                    "RetainerName": "Jezzy",
                    "StainID": 0,
                    "TownID": 2
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "10020008-4ec5-409c-b709-e661a0368ac5",
                    "CreatorSignatureName": "Jezabella Moretz",
                    "ID": "364eddf5aad46926132192ef9a07890d6ed88993",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 558995,
                    "PriceTotal": 558995,
                    "Quantity": 1,
                    "RetainerID": "441d25e0-c0ec-4421-a39c-f278090da34f",
                    "RetainerName": "Jezzy",
                    "StainID": 0,
                    "TownID": 2
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "0cb00838-b2a2-4e8e-abd4-4606469354b4",
                    "CreatorSignatureName": "Battle Litany",
                    "ID": "e9e4081d9fc16d8781deadfea6c2da920eba101d",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 558999,
                    "PriceTotal": 558999,
                    "Quantity": 1,
                    "RetainerID": "891675f9-fae1-47d0-aa19-646861bf2b88",
                    "RetainerName": "Battlelitany",
                    "StainID": 0,
                    "TownID": 1
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "0cb00838-b2a2-4e8e-abd4-4606469354b4",
                    "CreatorSignatureName": "Battle Litany",
                    "ID": "f1dac27f94001655782e34a345f8b5a98ca0f7af",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 558999,
                    "PriceTotal": 558999,
                    "Quantity": 1,
                    "RetainerID": "891675f9-fae1-47d0-aa19-646861bf2b88",
                    "RetainerName": "Battlelitany",
                    "StainID": 0,
                    "TownID": 1
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "55d48821-65d3-4812-87d9-f9c981a96d1d",
                    "CreatorSignatureName": "Natsumi Yuzuka",
                    "ID": "a6b307e0a5c406ee449f757ae72da585776b324f",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 559000,
                    "PriceTotal": 559000,
                    "Quantity": 1,
                    "RetainerID": "449e0934-150f-444a-8496-21addf4b4434",
                    "RetainerName": "Poponaco",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "0a92eaab-ebcb-4440-a50b-edafa03dea61",
                    "CreatorSignatureName": "Weeping Potato",
                    "ID": "a2998c3f3a6c4bc490976c79762f5238ca708ab4",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 559999,
                    "PriceTotal": 559999,
                    "Quantity": 1,
                    "RetainerID": "fd03d69f-af0a-4f55-9a05-30564e89705a",
                    "RetainerName": "Biablo",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "0a92eaab-ebcb-4440-a50b-edafa03dea61",
                    "CreatorSignatureName": "Weeping Potato",
                    "ID": "f08b21a9cf9609230746956a35f33f4288a5bae0",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 559999,
                    "PriceTotal": 559999,
                    "Quantity": 1,
                    "RetainerID": "fd03d69f-af0a-4f55-9a05-30564e89705a",
                    "RetainerName": "Biablo",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "155228df-8e87-4033-85fc-34c1f36b1cc8",
                    "CreatorSignatureName": "Gnarly Grey",
                    "ID": "d323d338f76c5ca5f08259eea66b11c8bad799e0",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 560000,
                    "PriceTotal": 560000,
                    "Quantity": 1,
                    "RetainerID": "2dfd4dee-d4ab-480b-a50f-99ed3671c622",
                    "RetainerName": "Djer",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "155228df-8e87-4033-85fc-34c1f36b1cc8",
                    "CreatorSignatureName": "Gnarly Grey",
                    "ID": "205c4b5393c026c0c1e97c84beb20e7150c52f7c",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 560000,
                    "PriceTotal": 560000,
                    "Quantity": 1,
                    "RetainerID": "2dfd4dee-d4ab-480b-a50f-99ed3671c622",
                    "RetainerName": "Djer",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "61ad38e3-514e-4f00-87c6-94a7e9043f72",
                    "CreatorSignatureName": "Firefox Fanta",
                    "ID": "4b8d1c9f914ab91820d267bffc9d3f6604ff1bf7",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 562000,
                    "PriceTotal": 562000,
                    "Quantity": 1,
                    "RetainerID": "708b52d8-7e20-45f1-b62d-d4ecd4ed6b12",
                    "RetainerName": "Nox-fleuret",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554324491,
                    "CreatorSignatureID": "61ad38e3-514e-4f00-87c6-94a7e9043f72",
                    "CreatorSignatureName": "Firefox Fanta",
                    "ID": "522657739345aef6d6378f5e612d8ca9a96a67f6",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 562000,
                    "PriceTotal": 562000,
                    "Quantity": 1,
                    "RetainerID": "708b52d8-7e20-45f1-b62d-d4ecd4ed6b12",
                    "RetainerName": "Nox-fleuret",
                    "StainID": 0,
                    "TownID": 7
                }],
                "Server": 10,
                "Updated": 1554324491
            }
        }, {
            "Brynhildr": {
                "History": [{
                    "Added": 1554321460,
                    "CharacterID": "1705e970-172c-47c1-b346-2555f8e5d315",
                    "CharacterName": "Mana Kurashi",
                    "ID": "f83559222a7c890738962a63a4876cd7ee9f42a3",
                    "IsHQ": true,
                    "PricePerUnit": 650000,
                    "PriceTotal": 650000,
                    "PurchaseDate": 1554278021,
                    "PurchaseDateMS": "1554278021000",
                    "Quantity": 1
                }],
                "ID": "10_23844",
                "Item": {
                    "ID": 23844,
                    "Icon": "/i/048000/048247.png",
                    "LevelItem": 380,
                    "Name": "Rakshasa Ring of Healing",
                    "Name_de": "Rakshasa-Ring der Heilung",
                    "Name_en": "Rakshasa Ring of Healing",
                    "Name_fr": "Bague rakshasa de soigneur",
                    "Name_ja": "\u7f85\u5239\u6307\u8f2a\u3010\u5b66\u58eb\u3011",
                    "Rarity": 2
                },
                "ItemID": 23844,
                "Prices": [{
                    "Added": 1554321460,
                    "CreatorSignatureID": "aa134e22-f02a-436d-9319-334ece045e5a",
                    "CreatorSignatureName": "Zelgius Drgslayer",
                    "ID": "6dc426b0bf277a9004f67280aebaeecf358631ab",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 587000,
                    "PriceTotal": 587000,
                    "Quantity": 1,
                    "RetainerID": "5401f6a3-782c-44a1-b1d5-b670cbc838de",
                    "RetainerName": "Eal",
                    "StainID": 0,
                    "TownID": 2
                }, {
                    "Added": 1554321460,
                    "CreatorSignatureID": "55d48821-65d3-4812-87d9-f9c981a96d1d",
                    "CreatorSignatureName": "Natsumi Yuzuka",
                    "ID": "e112bc934cd018927317d230926908aef4ac060b",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 588000,
                    "PriceTotal": 588000,
                    "Quantity": 1,
                    "RetainerID": "449e0934-150f-444a-8496-21addf4b4434",
                    "RetainerName": "Poponaco",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554321460,
                    "CreatorSignatureID": "155228df-8e87-4033-85fc-34c1f36b1cc8",
                    "CreatorSignatureName": "Gnarly Grey",
                    "ID": "c1c9e61fab87f9e6c248eca8bba3432a8d0c08c3",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 589000,
                    "PriceTotal": 589000,
                    "Quantity": 1,
                    "RetainerID": "2dfd4dee-d4ab-480b-a50f-99ed3671c622",
                    "RetainerName": "Djer",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554321460,
                    "CreatorSignatureID": "155228df-8e87-4033-85fc-34c1f36b1cc8",
                    "CreatorSignatureName": "Gnarly Grey",
                    "ID": "85205b20d5d6e2813dbeae6bb59bc337cd5e8550",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 589000,
                    "PriceTotal": 589000,
                    "Quantity": 1,
                    "RetainerID": "2dfd4dee-d4ab-480b-a50f-99ed3671c622",
                    "RetainerName": "Djer",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554321460,
                    "CreatorSignatureID": "61ad38e3-514e-4f00-87c6-94a7e9043f72",
                    "CreatorSignatureName": "Firefox Fanta",
                    "ID": "9dac1b97067e48cdc84727fd2e4a074e45083fda",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 590000,
                    "PriceTotal": 590000,
                    "Quantity": 1,
                    "RetainerID": "708b52d8-7e20-45f1-b62d-d4ecd4ed6b12",
                    "RetainerName": "Nox-fleuret",
                    "StainID": 0,
                    "TownID": 7
                }, {
                    "Added": 1554321460,
                    "CreatorSignatureID": "61ad38e3-514e-4f00-87c6-94a7e9043f72",
                    "CreatorSignatureName": "Firefox Fanta",
                    "ID": "8d44586fbd5da9c7855b1de1619b59f6221dd354",
                    "IsCrafted": true,
                    "IsHQ": true,
                    "Materia": [],
                    "PricePerUnit": 590000,
                    "PriceTotal": 590000,
                    "Quantity": 1,
                    "RetainerID": "708b52d8-7e20-45f1-b62d-d4ecd4ed6b12",
                    "RetainerName": "Nox-fleuret",
                    "StainID": 0,
                    "TownID": 7
                }],
                "Server": 10,
                "Updated": 1554321460
            }
        }];

        // TODO trim prices
        const items = Object.values(data).map(item => {
            const item_data = Object.values(item)[0];
            return {
                item_id: item_data.ItemID,
                prices: item_data.Prices
            };
        });

        dispatch(watchlistFetchSuccess(items));
    }
}

function watchlistFetchRequest() {
    return {
        type: WATCHLIST_FETCH_REQUEST
    }
}

function watchlistFetchSuccess(data) {
    return {
        type: WATCHLIST_FETCH_SUCCESS,
        payload: {
            items: data
        }
    }
}

function watchlistFetchFailure(msg) {
    return {
        type: WATCHLIST_FETCH_FAILURE,
        payload: {
            error: msg
        }
    }
}