import { legacy_createStore } from "redux";
import ReducerFunction from "./TodoReducer/Reducer";
import { combineReducers } from "redux";
import Reducer from "./LoginReducer/Reducer";


const MainReducer = combineReducers({ReducerFunction,Reducer})

export const ReduxStore = legacy_createStore(MainReducer)