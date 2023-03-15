import React from "react";
import HomeScreen from "./HomeScreen";
import { type Events } from "../../types";
import { screen } from "@testing-library/react-native";
import renderWithProviders from "../../utils/renderWithProviders";

describe("Given HomeScreen page", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text 'Eventizi'", async () => {
      const pageTitle = "title";

      const mockEvents: Events = [
        {
          id: "",
          name: "Summer Music Festival",
          location: "Costa Brava Beach",
          category: [],
          date: "",
          image: "",
          organizer: "",
          time: "",
        },
      ];

      renderWithProviders(<HomeScreen />);

      const expectedTitle = screen.getByTestId(pageTitle);

      expect(expectedTitle).toBeOnTheScreen();
    });
  });
});
