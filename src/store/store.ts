import { createSlice, configureStore } from "@reduxjs/toolkit"

type counterStateType = {
    counter: number,
    showCounter: boolean
}

type authenticationStateType = {
    isAuthenticated: boolean
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

const authenticationState: authenticationStateType = {isAuthenticated: false}

const authSlice = createSlice({
    name: 'authentication',
    initialState: authenticationState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});


export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export default store;
