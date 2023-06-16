import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightInfo: { total: null, result: [] },
  username: "",
};

export const slice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    addFlightInfo: (state, action) => {
      state.flightInfo = action.payload;
    },
    addUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { addFlightInfo } = slice.actions;
export const selectFlightInfo = (state) => state.home.flightInfo;
export const selectUsername = (state) => state.home.username;
export default slice.reducer;