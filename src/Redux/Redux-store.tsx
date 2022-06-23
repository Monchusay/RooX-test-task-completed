import { combineReducers, createStore } from "redux";
import MainObjPageReducer, {MainObjPageState} from "./MainObjPageReducer";
import {configureStore} from "@reduxjs/toolkit";

let reducers = combineReducers<State>({
    MainObjPage: MainObjPageReducer,
});
export interface State {
    MainObjPage:MainObjPageState
}

let store = configureStore({
    reducer:reducers
})

export default store