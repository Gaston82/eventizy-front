import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User, type UserState } from "../../../types";

const initialState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentState,
      ...action.payload,
      isLogged: true,
    }),
  },
});
export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
