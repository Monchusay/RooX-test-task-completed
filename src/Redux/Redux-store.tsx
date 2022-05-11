import { combineReducers, createStore } from "redux";
import MainObjPageReducer, {MainObjPageState} from "./MainObjPageReducer";

let reducers = combineReducers<State>({
    MainObjPage: MainObjPageReducer,
});
export interface State {
    MainObjPage:MainObjPageState
}

let store = createStore(reducers)

export default store