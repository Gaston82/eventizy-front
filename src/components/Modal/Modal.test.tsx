import { screen } from "@testing-library/react-native";
import React from "react";
import { mockUiState } from "../../mocks/mocksUi";
import renderWithProviders from "../../utils/renderWithProviders";
import ModalCard from "./Modal";

describe("Given the ModalCard component ", () => {
  describe("When  it render with a modalMessage ", () => {
    test("Then it should show 'Something went wrong text'", async () => {
      const modalMessage = "Something went wrong";

      renderWithProviders(<ModalCard />, { ui: mockUiState });

      const expectedModalMessage = await screen.getByText(modalMessage);

      expect(expectedModalMessage).toBeDefined();
    });
  });
});
