import { StyleSheet } from "react-native";
import colorsStyle from "../../styles/styles";

const LoaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorsStyle.mainColor,
  },
  indicator: {
    color: "black",
  },
});

export default LoaderStyles;
