import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
}
export const LoginReducer = createSlice({
    name:"user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { setEmail, setPassword } = LoginReducer.actions;

export default LoginReducer.reducer;