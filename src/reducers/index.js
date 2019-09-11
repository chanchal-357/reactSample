import { registrationReducer } from "./Registration";
import { counterReducer } from "./Counter";
import { combineReducers } from "redux";

export default combineReducers({
    registration: registrationReducer,
    counter: counterReducer
});