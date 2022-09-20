import { createSlice, configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./auth";
import CounterReducer from "./counter";
import CartReducer from "./cart";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        auth: AuthReducer,
        cart: CartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
