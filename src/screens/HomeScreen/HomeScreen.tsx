import React from "react";
import { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import useEvents from "../../hooks/useEvents/useEvents";
import { useAppSelector } from "../../store/hooks";

const HomeScreen = () => {
  const { getEvents } = useEvents();

  useEffect(() => {
    (async () => {
      await getEvents();
    })();
  }, []);

  const events = useAppSelector((state) => state.events);

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
