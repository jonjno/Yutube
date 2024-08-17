import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addtocache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addtocache } = serachSlice.actions;

export default serachSlice.reducer;
