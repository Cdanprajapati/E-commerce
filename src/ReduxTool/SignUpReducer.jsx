import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUpReducer = createSlice({
  name:"user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.name = action.payload;
    },
    setLastName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.email = action.payload;
    },
    // clear: (state) => {
    //   state.name = "";
    //   state.email = "";
    //   state.phoneNumber = "";
    //   state.password = "";
    // },
  },
});

export const { setFirstName, setLastName, setEmail, setPassword, setConfirmPassword} =
SignUpReducer.actions;

export default SignUpReducer.reducer;
