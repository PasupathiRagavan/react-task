// store.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Load the initial state from local storage
const initialState = JSON.parse(localStorage.getItem("reduxState")) || {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// Subscribe to store updates and save the state to local storage
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
