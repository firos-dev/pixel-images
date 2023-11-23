import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  data: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState: INITIAL_STATE,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
    },
    removeData: (state) => {
      state.data = null;
    },
    
  },
});

export const { saveData, removeData } = dataSlice.actions;

export default dataSlice.reducer;