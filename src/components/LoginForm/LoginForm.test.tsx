import React from "react";
import { screen } from "@testing-library/react-native";
import LoginForm from "./LoginForm";
import renderWithProviders from "../../utils/renderWithProviders";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

describe("Given the LoginForm component", () => {
  describe("When it's rendered ", () => {
    test("Then it should show a title with the text 'Login'", async () => {
      const expectedTitle = "Login";
      renderWithProviders(<LoginForm />);

      const title = await screen.getByTestId(expectedTitle);

      expect(title).toBeOnTheScreen();
    });

    test("Then it should show an input with the text 'username' and another with the text password", async () => {
      const labelUsername = "username";
      const labelPassword = "password";

      renderWithProviders(<LoginForm />);

      const usernameLabelText = await screen.getByTestId(labelUsername);
      const passwordLabelText = await screen.getByTestId(labelPassword);

      expect(usernameLabelText).toBeOnTheScreen();
    });
  });
});
