import { registration } from "../constants/ActionTypes";

const initialState = {
    mobileNumber: ''
};

export const registrationReducer = { state = initialState, action } => {
    switch (action.type) {
        case registration.SET_MOBILE_NUMBER:
            return { ...state, mobileNumber: action.payload };
        default:
            return state;
    }
};