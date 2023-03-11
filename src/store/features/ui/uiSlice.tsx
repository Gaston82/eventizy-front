import { createSlice } from "@reduxjs/toolkit";
import type UiStructure from "./types";

const initialState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const { setIsLoading: setIsLoadingActionCreator } = uiSlice.actions;
