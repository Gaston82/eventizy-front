import React from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
import EventList from "../../components/EventList/EventList";
import useEvents from "../../hooks/useEvents/useEvents";
import { useAppSelector } from "../../store/hooks";
import HomeScreenStyles from "./HomeScreenStyles";

const HomeScreen = () => {
  const { getEvents } = useEvents();

  useEffect(() => {
    (async () => {
      await getEvents();
    })();
  }, []);

  const events = useAppSelector((state) => state.events);

  return (
    <>
      <View>
        <Text testID="title" style={HomeScreenStyles.title}>
          Eventizi
        </Text>
        <EventList events={events} />
      </View>
    </>
  );
};

export default HomeScreen;
