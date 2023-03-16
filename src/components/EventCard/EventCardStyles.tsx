import { StyleSheet } from "react-native";

const EventCardStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 300,
    marginBottom: 80,
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: "90%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
  },
  textLocation: {
    fontSize: 18,
  },
});

export default EventCardStyles;
