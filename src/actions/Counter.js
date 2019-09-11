import { counter } from "../constants/ActionTypes";

export const incrementCounter = count => ({
    type: counter.INCREMENT_COUNT,
    payload: count + 1
});

export const decrementCounter = count => ({
    type: counter.DECREMENT_COUNT,
    payload: count - 1
});

export const resetCounter = () => ({
    type: counter.RESET_COUNT,
    payload: 0
});