import { StyleSheet } from "react-native";

const LoginFormStyles = StyleSheet.create({
  title: {
    fontSize: 45,
    marginBottom: 30,
  },
  label: {
    padding: 10,
  },
  input: {
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    width: 300,
    padding: 10,
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
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default LoginFormStyles;
