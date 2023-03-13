import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from "@reduxjs/toolkit";
import { eventReducer } from "./features/eventSlice/eventSlice";
import { uiReducer } from "./features/ui/uiSlice";
import { userReducer } from "./features/userSlice/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  events: eventReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
