import { StyleSheet } from "react-native";
import colorsStyle from "../../styles/styles";

const LoaderStyles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  indicator: {
    color: "black",
  },
});

export default LoaderStyles;
