import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailslice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});