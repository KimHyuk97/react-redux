import { createSlice, configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./auth";
import CounterReducer from "./counter";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        auth: AuthReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
