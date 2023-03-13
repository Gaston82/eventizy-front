import { createSlice } from "@reduxjs/toolkit";
import type UiStructure from "./types";

const initialState: UiStructure = {
  isLoading: false,
  isError: false,
  modalMessage: "",
  showModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    unsetIsLoading: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;
