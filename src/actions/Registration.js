import { registration } from "../constants/ActionTypes";

export const SetMobileNumber = mobileNumber => ({
    type: registration.SET_MOBILE_NUMBER,
    payload: mobileNumber
});