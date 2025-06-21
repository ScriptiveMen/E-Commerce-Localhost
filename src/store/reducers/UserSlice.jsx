import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState = {
  users: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { loaduser } = UserSlice.actions;
