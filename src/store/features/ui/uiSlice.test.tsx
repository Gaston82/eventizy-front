import type UiStructure from "./types";
import { setIsLoadingActionCreator, uiReducer } from "./uiSlice";

describe("Given the ui reducer", () => {
  describe("When the setIsLoadingAction recieves and state with the property isLoading with the value false", () => {
    test("Then it should return a new state with the property isLoading with the value true", () => {
      const mockUiState: UiStructure = {
        isLoading: false,
      };

      const expectedUiState: UiStructure = {
        ...mockUiState,
        isLoading: true,
      };

      const newUiState = uiReducer(mockUiState, setIsLoadingActionCreator);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
