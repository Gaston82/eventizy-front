import { type UiStructure } from "../store/features/ui/types";
import { setupStore } from "../store/store";

export const mockUiState: UiStructure = {
  showModal: true,
  isLoading: false,
  modalMessage: "Something went wrong",
  isError: true,
};

export const mockUiStore = setupStore({ ui: mockUiState });
