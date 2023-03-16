import React from "react";
import { View, Text, Image } from "react-native";
import { type Event } from "../../types";
import EventCardStyles from "./EventCardStyles";

interface EventCardProps {
  event: Event;
}

const EventCard = ({
  event: { id, name, image, location },
}: EventCardProps) => (
  <>
    <View style={EventCardStyles.container}>
      <Image source={{ uri: image }} style={EventCardStyles.image}></Image>
      <View>
        <Text style={EventCardStyles.title}>{name}</Text>
      </View>
      <View>
        <Text style={EventCardStyles.textLocation}>{location}</Text>
      </View>
    </View>
  </>
);

export default EventCard;
