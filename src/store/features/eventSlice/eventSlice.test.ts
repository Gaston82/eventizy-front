import { type Events } from "../../../types";
import {
  deleteEventByIdActionCreator,
  eventReducer,
  loadEventsActionCreators,
} from "./eventSlice";

describe("Given the loadEventsActionCreator", () => {
  describe("When it recieves a list with two events", () => {
    test("Then it should return a new state with two events", () => {
      const mockInitialState: Events = [];
      const mockEvents = [
        {
          id: "",
          name: "Summer Music Festival",
          location: "Costa Brava Beach",
          image: "summer_music_festival.jpg",
          date: "2023-07-15",
          time: "18:00:00",
          organizer: "ABC Productions",
          category: ["music", "festival"],
        },
        {
          id: "20897",
          name: "Open-air Art Exhibition",
          location: "Gothic Quarter",
          image: "open_air_art_exhibition.jpg",
          date: "2023-07-22",
          time: "10:00:00",
          organizer: "Art Society",
          category: ["art", "exhibition"],
        },
      ];

      const expectedState = eventReducer(
        mockInitialState,
        loadEventsActionCreators(mockEvents)
      );

      expect(expectedState).toStrictEqual(mockEvents);
    });
  });
});

describe("Given the deleteEventByIdActionCreator", () => {
  describe("When it recieves a list of two events, and an event id of one them", () => {
    test("Then it should return a new state without that event", () => {
      const mockEventsInitialState: Events = [
        {
          id: "2569jdlokha",
          name: "Summer Music Festival",
          location: "Costa Brava Beach",
          image: "summer_music_festival.jpg",
          date: "2023-07-15",
          time: "18:00:00",
          organizer: "ABC Productions",
          category: ["music", "festival"],
        },
        {
          id: "20897",
          name: "Open-air Art Exhibition",
          location: "Gothic Quarter",
          image: "open_air_art_exhibition.jpg",
          date: "2023-07-22",
          time: "10:00:00",
          organizer: "Art Society",
          category: ["art", "exhibition"],
        },
      ];

      const newExpectedState = [
        {
          id: "20897",
          name: "Open-air Art Exhibition",
          location: "Gothic Quarter",
          image: "open_air_art_exhibition.jpg",
          date: "2023-07-22",
          time: "10:00:00",
          organizer: "Art Society",
          category: ["art", "exhibition"],
        },
      ];

      const expectedState = eventReducer(
        mockEventsInitialState,
        deleteEventByIdActionCreator("2569jdlokha")
      );

      expect(expectedState).toStrictEqual(newExpectedState);
    });
  });
});
