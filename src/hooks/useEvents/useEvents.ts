import axios from "axios";

import { REACT_APP_URL } from "@env";
import { useAppDispatch } from "../../store/hooks";
import {
  setIsLoadingActionCreator,
  showModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import {
  deleteEventByIdActionCreator,
  loadEventsActionCreators,
} from "../../store/features/eventSlice/eventSlice";
import { type EventsResponse } from "../../types";

const useEvents = () => {
  const dispatch = useAppDispatch();

  const getEvents = async () => {
    dispatch(setIsLoadingActionCreator());

    try {
      const events = await axios.get<EventsResponse>(`${REACT_APP_URL}/events`);
      dispatch(loadEventsActionCreators(events.data.events));
      dispatch(unsetIsLoadingActionCreator());
    } catch {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalMessage: "Something went wrong",
          showModal: true,
        })
      );
    }
  };

  const deleteEventById = async (id: string) => {
    dispatch(setIsLoadingActionCreator());

    try {
      const eventToDelete = await axios.delete(
        `${REACT_APP_URL}/events/:${id}`
      );
      dispatch(deleteEventByIdActionCreator(id));
      dispatch(unsetIsLoadingActionCreator());
    } catch {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalMessage: "Something went wrong",
          showModal: true,
        })
      );
    }
  };

  return { getEvents, deleteEventById };
};

export default useEvents;
