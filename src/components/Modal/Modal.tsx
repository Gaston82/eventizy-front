import React from "react";
import { Text, Pressable, View } from "react-native";
import { hideModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ModalCardStyles from "./ModalCardStyles";

const ModalCard = () => {
  const dispatch = useAppDispatch();

  const { modalMessage } = useAppSelector((state) => state.ui);

  return (
    <>
      <View style={ModalCardStyles.centeredView}>
        <View style={ModalCardStyles.modalView}>
          <Text style={ModalCardStyles.modalText}>{modalMessage}</Text>
          <Pressable
            testID="modalButton"
            style={[ModalCardStyles.button, ModalCardStyles.buttonClose]}
            onPress={() => {
              dispatch(hideModalActionCreator());
            }}
          >
            <Text style={ModalCardStyles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ModalCard;
