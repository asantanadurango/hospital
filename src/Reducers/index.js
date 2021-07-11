import { combineReducers, createStore } from "redux";
import { pacientesReducers } from "./createReducers";

const reducers = combineReducers({ pacientesReducers });

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store);

export default store;
