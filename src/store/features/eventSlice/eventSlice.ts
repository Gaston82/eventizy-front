import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Events } from "../../../types";

const initialEventsState: Events = [];

const eventSlice = createSlice({
  name: "event",
  initialState: initialEventsState,
  reducers: {
    loadEvents: (
      currentState: Events,
      action: PayloadAction<Events>
    ): Events => [...action.payload],
  },
});

export const eventReducer = eventSlice.reducer;
export const { loadEvents: loadEventsActionCreators } = eventSlice.actions;
