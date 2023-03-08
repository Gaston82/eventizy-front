import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type UserLoginStructure } from "../../../types";

const initialState: UserLoginStructure = {
  token: "",
  username: "",
  isLogged: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentState: UserLoginStructure,
      action: PayloadAction<UserLoginStructure>
    ): UserLoginStructure => ({
      ...currentState,
      ...action.payload,
      isLogged: true,
    }),
  },
});
export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
