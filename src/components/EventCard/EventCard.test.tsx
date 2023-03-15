import React from "react";
import { render, screen } from "@testing-library/react";
import EventCard from "./EventCard";
import { type Event } from "../../types";

describe("Given the EventCard component", () => {
  const mockEvent: Event = {
    id: "",
    name: "Summer Music Festival",
    location: "Costa Brava Beach",
    category: [],
    date: "",
    image: "",
    organizer: "",
    time: "",
  };

  describe("When it render with the event 'Summer Music Festival',", () => {
    test("Then it should show an event name with the text 'Summer Music Festival', and the location 'Costa Brava Beach'", () => {
      render(<EventCard event={mockEvent} />);

      const expectedEventName = screen.getByText(mockEvent.name);
      const expectedEventLocation = screen.getByText(mockEvent.location);

      expect(expectedEventName).toBeDefined();
      expect(expectedEventLocation).toBeDefined();
    });
  });
});
