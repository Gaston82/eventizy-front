import React from "react";
import { FlatList } from "react-native";
import { type Events } from "../../types";
import EventCard from "../EventCard/EventCard";

interface EventListProps {
  events: Events;
}

const EventList = ({ events }: EventListProps): JSX.Element => (
  <FlatList
    data={events}
    renderItem={({ item }) => <EventCard event={item} />}
  />
);

export default EventList;
