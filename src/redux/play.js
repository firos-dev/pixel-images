import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  selectedIndex: null,
};

const playSlice = createSlice({
  name: "play",
  initialState: INITIAL_STATE,
  reducers: {
    setSelected: (state, action) => {
      state.patientAPIError = action.payload;
    },
  },
});

export const {
  setSelected,
} = playSlice.actions;

export default playSlice.reducer;