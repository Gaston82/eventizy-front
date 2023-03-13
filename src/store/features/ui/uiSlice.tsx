import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type UiStructure from "./types";
import { type ModalStructure } from "./types";

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
    showModal: (
      currentState: UiStructure,
      action: PayloadAction<ModalStructure>
    ) => ({
      ...currentState,
      isError: true,
      modalMessage: action.payload.modalMessage,
      showModal: true,
    }),
    hideModal: (currentState: UiStructure) => ({
      ...currentState,
      showModal: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;
