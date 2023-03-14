import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";
import { mockUiState, mockUiStore } from "../../mocks/mocksUi";
import { hideModalActionCreator } from "../../store/features/ui/uiSlice";
import renderWithProviders from "../../utils/renderWithProviders";
import ModalCard from "./Modal";

const dispatch = jest.spyOn(mockUiStore, "dispatch");

describe("Given the ModalCard component ", () => {
  describe("When  it render with a modalMessage ", () => {
    test("Then it should show 'Something went wrong text'", async () => {
      const modalMessage = "Something went wrong";

      renderWithProviders(<ModalCard />, { ui: mockUiState });

      const expectedModalMessage = await screen.getByText(modalMessage);

      expect(expectedModalMessage).toBeDefined();
    });
  });

  describe("When the user press the button with text 'Close'", () => {
    test("Then it should call the dispatch method with hideModalActionCreator", async () => {
      const buttonId = "modalButton";

      render(
        <Provider store={mockUiStore}>
          <ModalCard />
        </Provider>
      );

      const button = await screen.getByTestId(buttonId);
      fireEvent.press(button);

      expect(dispatch).toHaveBeenCalledWith(hideModalActionCreator());
    });
  });
});
