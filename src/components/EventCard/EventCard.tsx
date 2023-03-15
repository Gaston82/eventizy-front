import React from "react";
import { View, Text, Image } from "react-native";
import { type Event } from "../../types";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event: { name, image, location } }: EventCardProps) => (
  <>
    <View>
      <View>
        <Image source={{ uri: image }}></Image>
      </View>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{location}</Text>
      </View>
    </View>
  </>
);

export default EventCard;
