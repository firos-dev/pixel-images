import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./play";

export const store = configureStore({
  reducer: {
    play: playReducer,
  },
});
