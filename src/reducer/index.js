import { registrationReducer } from "./Registration";
import { combinedReducers } from "redux";

export default combinedReducers({
    registration: registrationReducer
});