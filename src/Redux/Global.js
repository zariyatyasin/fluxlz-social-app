import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelOpen: false,
};

export const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    model_Open: (state) => {
      state.modelOpen = state.modelOpen ? false : true;
    },
  },
});

export const { model_Open } = globalState.actions;
export default globalState.reducer;
