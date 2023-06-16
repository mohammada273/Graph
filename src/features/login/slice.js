import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "ارور مربوط به این فرم",
};

export const slice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    selectSubmitAction: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

export const { selectSubmitAction } = slice.actions;
export const selectMessage = (state) => state.login.message;
export default slice.reducer;