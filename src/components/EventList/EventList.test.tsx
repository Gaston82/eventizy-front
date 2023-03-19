import React from "react";
import { type Events } from "../../types";
import { screen } from "@testing-library/react-native";
import renderWithProviders from "../../utils/renderWithProviders";
import EventList from "./EventList";

beforeEach(() => jest.clearAllMocks());

describe("Given HomeScreen page", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text 'Eventizi'", () => {
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

      renderWithProviders(<EventList events={mockEvents} />);

      const expectedEventName = screen.getByText(mockEvents[0].name);
      const expectedEventLocation = screen.getByText(mockEvents[0].location);

      expect(expectedEventName).toBeOnTheScreen();
      expect(expectedEventLocation).toBeOnTheScreen();
    });
  });
});
