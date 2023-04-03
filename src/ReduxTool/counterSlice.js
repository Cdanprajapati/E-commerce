import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // inputSignUp: (state, data) => {
    //   state.value = data.payload;
    //   console.log(data.payload, "here data...!");
    // },
    // inputlogin: (state, data) => {
    //   state.value = data.payload;
    //   console.log(data.payload, "here is login data....>")
    // }
  },
});

export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
