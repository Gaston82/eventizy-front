import { StyleSheet } from "react-native";
import colorsStyle from "../../styles/styles";

const ModalCardStyles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  modalView: {
    position: "absolute",
    zIndex: 1,
    margin: 20,
    backgroundColor: colorsStyle.mainColor,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 21,
  },
});

export default ModalCardStyles;
