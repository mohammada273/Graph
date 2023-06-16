import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  username: null
};

export const slice = createSlice({
  name: "shareReducer",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { addUsername, addToken } = slice.actions;
export const selectPersistToken = (state) => state.shareReducer.token;
export const selectPersistUsername = (state) => state.shareReducer.username;
export default slice.reducer;
