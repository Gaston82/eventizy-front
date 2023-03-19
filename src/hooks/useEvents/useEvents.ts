import axios from "axios";

import { REACT_APP_URL } from "@env";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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
  const token = useAppSelector((state) => state.user.token);

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
      await axios.delete(`${REACT_APP_URL}/events/${id}`, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: `Bearer ${token}`,
        },
      });
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
