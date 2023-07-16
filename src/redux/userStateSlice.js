// cú pháp nhanh : rxslice
import { createSlice } from "@reduxjs/toolkit";
import { localStorageService } from "../Services/localStorageService";

const initialState = {
  userInfo: localStorageService.getUser("USER_LOGIN"),
};

const userStateSlice = createSlice({
  name: "userStateSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin } = userStateSlice.actions;

export default userStateSlice.reducer;
