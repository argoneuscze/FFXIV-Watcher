import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {loadState, saveState} from "./localStorage";
import {throttle} from "lodash";

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(throttle(() => {
    saveState({
        watchlist: store.getState().watchlist
    });
}));

export default store;
