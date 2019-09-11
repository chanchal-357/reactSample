import { registration } from "../constants/ActionTypes";

export const setMobileNumber = mobileNumber => ({
    type: registration.SET_MOBILE_NUMBER,
    payload: mobileNumber
});