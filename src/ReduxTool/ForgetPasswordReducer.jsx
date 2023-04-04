import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
}

export const ForgetPasswordReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
    }
})

export const { setEmail} = ForgetPasswordReducer.actions;
export default ForgetPasswordReducer.reducer;