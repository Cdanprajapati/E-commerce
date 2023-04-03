import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import SignUpReducer from "./SignUpReducer";
import LoginReducer from "./LoginReducer";

export const store = configureStore({
  reducer: {
    counterReducer, SignUpReducer, LoginReducer
  },
});


// import { configureStore } from '@reduxjs/toolkit'
// import countSlice from './reducer/count.slice'
// import userSlice from "./reducer/user.slice"
// export const store = configureStore({
//     reducer: { countSlice, userSlice },
// })