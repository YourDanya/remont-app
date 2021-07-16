import navReducer from "./nav-reducer";
import {combineReducers, createStore} from "redux";

let reducers=combineReducers( {nav: navReducer});

let store=createStore(reducers);

export default store;