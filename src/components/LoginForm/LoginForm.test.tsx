import React from "react";
import { fireEvent, screen } from "@testing-library/react-native";
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
  const mockUser = {
    username: "pepe",
    password: "usertest202301",
  };

  describe("When it's rendered ", () => {
    test("Then it should show a title with the text 'Login'", async () => {
      const expectedTitle = "Login";
      renderWithProviders(<LoginForm />);

      const title = await screen.getByTestId(expectedTitle);

      expect(title).toBeOnTheScreen();
    });

    test("Then it should show an input with the text 'username',another with the text password, and a button with 'Log in' text", async () => {
      const labelUsername = "username";
      const labelPassword = "password";
      const buttonText = "Log in";

      renderWithProviders(<LoginForm />);

      const usernameLabelText = await screen.getByTestId(labelUsername);
      const passwordLabelText = await screen.getByTestId(labelPassword);
      const button = await screen.getByText(buttonText);

      expect(usernameLabelText).toBeOnTheScreen();
      expect(passwordLabelText).toBeOnTheScreen();
      expect(button).toBeOnTheScreen();
    });
  });

  describe("When a user fills the username field and the password field and press the login button", () => {
    test("Then the input should show the text entered by the user and the loginUser function should be call", async () => {
      const labelUsername = "username";
      const labelPassword = "password";
      const buttonText = "Log in";

      renderWithProviders(<LoginForm />);

      const usernameLabelText = await screen.getByTestId(labelUsername);
      const passwordLabelText = await screen.getByTestId(labelPassword);
      const button = await screen.getByText(buttonText);
      fireEvent.changeText(usernameLabelText, mockUser.username);
      fireEvent.changeText(passwordLabelText, mockUser.password);
      fireEvent.press(button, "button");

      expect(usernameLabelText.props.value).toBe(mockUser.username);
      expect(passwordLabelText.props.value).toBe(mockUser.password);
      expect(mockedLoginUser).toHaveBeenCalledWith({
        username: mockUser.username,
        password: mockUser.password,
      });
    });
  });
});
