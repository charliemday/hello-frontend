import { createSlice } from '@reduxjs/toolkit'
import { authApi, userApi } from 'api';

export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export interface AuthState {
    token: string | null;
    userDetails: UserDetails | null;
}

const initialState: AuthState = {
    token: null,
    userDetails: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            state.token = action.payload.token;
        }),
        builder.addMatcher(authApi.endpoints.signup.matchFulfilled, (state, action) => {
            state.token = action.payload.token;
        }),
        builder.addMatcher(userApi.endpoints.userDetails.matchFulfilled, (state, action) => {
            
            console.log('Action', action.payload);

            // state.userDetails = action.payload;
        })
    },
})

// Action creators are generated for each case reducer function
// export const { } = authSlice.actions

export default authSlice.reducer