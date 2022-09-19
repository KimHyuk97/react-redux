import { createSlice } from "@reduxjs/toolkit";

type counterStateType = {
    counter: number,
    showCounter: boolean
}

const counterState: counterStateType = { counter : 1, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: counterState,
    reducers: {
        increment(state:counterStateType, action: any) {
            state.counter += action.payload
        },
        decrement(state: counterStateType, action: any) {
            state.counter -= action.payload
        },
        toggle(state: counterStateType) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer