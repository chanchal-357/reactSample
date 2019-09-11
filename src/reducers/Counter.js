import { counter } from "../constants/ActionTypes";

const initialState = {
    count: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counter.INCREMENT_COUNT:
            return { ...state, count: action.payload };
        case counter.DECREMENT_COUNT:
            return { ...state, count: action.payload };
        case counter.RESET_COUNT:
            return { ...state, count: action.payload };
        default:
            return state;
    }
};
