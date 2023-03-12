import { type Events } from "../../../types";
import { eventReducer, loadEventsActionCreators } from "./eventSlice";

describe("Given the loadEventsActionCreator", () => {
  describe("When it recieves a list with two events", () => {
    test("Then it should return a new state with two events", () => {
      const mockInitialState: Events = [];
      const mockEvents = [
        {
          name: "Summer Music Festival",
          location: "Costa Brava Beach",
          image: "summer_music_festival.jpg",
          date: "2023-07-15",
          time: "18:00:00",
          organizer: "ABC Productions",
          category: ["music", "festival"],
        },
        {
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
