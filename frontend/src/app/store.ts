import {configureStore} from "@reduxjs/toolkit";
import { MessageReducer } from "../store/message";

export const store = configureStore({
  reducer: {
    message: MessageReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;