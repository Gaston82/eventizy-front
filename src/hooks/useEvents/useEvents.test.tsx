import { renderHook } from "@testing-library/react-native";
import Wrapper from "../../mocks/Wrapper";
import {
  loadEventsActionCreators,
  deleteEventByIdActionCreator,
} from "../../store/features/eventSlice/eventSlice";
import { store } from "../../store/store";
import { type Events } from "../../types";
import useEvents from "./useEvents";

const spyDispatch = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

const mockEvents: Events = [
  {
    id: "240719vida",
    name: "Summer Music Festival",
    location: "Costa Brava Beach",
    image: "summer_music_festival.jpg",
    date: "2023-07-15",
    time: "18:00:00",
    organizer: "ABC Productions",
    category: ["music", "festival"],
  },
];

describe("Given the useEvents hook", () => {
  describe("When the function getEvents is called", () => {
    test("Then dispatch function should be call with the loadEventsActionCreator function", async () => {
      const {
        result: {
          current: { getEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });
      await getEvents();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadEventsActionCreators(mockEvents)
      );
    });
  });

  describe("When the function deleteEventById is called", () => {
    test("Then dispatch function should be call with the deleteEventByIdActionCreator function", async () => {
      const {
        result: {
          current: { deleteEventById },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });
      await deleteEventById(mockEvents[0].id);

      expect(spyDispatch).toHaveBeenCalledWith(
        deleteEventByIdActionCreator(mockEvents[0].id)
      );
    });
  });
});
