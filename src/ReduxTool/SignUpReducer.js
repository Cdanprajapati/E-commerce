import { createSlice } from "@reduxjs/toolkit";

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
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
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
