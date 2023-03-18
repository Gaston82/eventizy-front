import React from "react";
import { View, Text, Image } from "react-native";
import { type Event } from "../../types";
import EventCardStyles from "./EventCardStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

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

        <FontAwesomeIcon
          icon={faTrash}
          style={EventCardStyles.icon}
          size={50}
        />
      </View>
    </View>
  </>
);

export default EventCard;
