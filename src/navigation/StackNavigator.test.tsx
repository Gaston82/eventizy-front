import React from "react";
import { screen } from "@testing-library/react-native";
import renderWithProviders from "../utils/renderWithProviders";
import StackNavigator from "./StackNavigator";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

describe("Given the StackNavigator component", () => {
  describe("When it rendered", () => {
    test("Then it should show a 'Login', a form with an input to enter the username and another to enter the password ", () => {
      const expectedTitle = "Login";
      const expectedTextUsername = "username";
      const expectedTextPassword = "password";
      const expectedTextButton = "Log in";

      renderWithProviders(<StackNavigator />);

      const pageTitle = screen.getByTestId(expectedTitle);
      const inputUsername = screen.getByTestId(expectedTextUsername);
      const inputPassword = screen.getByTestId(expectedTextPassword);
      const button = screen.getByText(expectedTextButton);

      expect(pageTitle).toBeOnTheScreen();
      expect(inputUsername).toBeOnTheScreen();
      expect(inputPassword).toBeOnTheScreen();
      expect(button).toBeOnTheScreen();
    });
  });
});
