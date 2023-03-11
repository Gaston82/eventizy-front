import { StyleSheet } from "react-native";
import colorsStyle from "../../styles/styles";

const LoginFormStyles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 45,
    marginBottom: 30,
    marginTop: 50,
    fontWeight: "700",
  },
  label: {
    padding: 10,
    fontSize: 21,
    fontWeight: "600",
  },
  input: {
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    width: 300,
    padding: 10,
    borderColor: "#C2C2B8",
    fontSize: 18,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  button: {
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 60,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colorsStyle.mainColor,
  },
  textButton: {
    fontSize: 21,
    fontWeight: "600",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginBottom: 30,
  },
});

export default LoginFormStyles;
