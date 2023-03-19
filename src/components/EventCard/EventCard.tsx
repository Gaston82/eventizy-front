import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { type Event } from "../../types";
import EventCardStyles from "./EventCardStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import useEvents from "../../hooks/useEvents/useEvents";

interface EventCardProps {
  event: Event;
}

const EventCard = ({
  event: { id, name, image, location },
}: EventCardProps) => {
  const { deleteEventById } = useEvents();

  return (
    <>
      <View style={EventCardStyles.container}>
        <Image source={{ uri: image }} style={EventCardStyles.image}></Image>
        <View>
          <Text style={EventCardStyles.title}>{name}</Text>
        </View>
        <View>
          <Text style={EventCardStyles.textLocation}>{location}</Text>
          <TouchableOpacity onPress={async () => deleteEventById(id)}>
            <FontAwesomeIcon
              icon={faTrash}
              style={EventCardStyles.icon}
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default EventCard;
