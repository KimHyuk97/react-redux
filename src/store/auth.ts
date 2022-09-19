import { createSlice } from "@reduxjs/toolkit";


type authenticationStateType = {
    isAuthenticated: boolean
}

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

export const authActions = authSlice.actions;

export default authSlice.reducer