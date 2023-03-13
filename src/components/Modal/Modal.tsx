import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { hideModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ModalCardStyles from "./ModalCardStyles";

const ModalCard = () => {
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(true);

  const { modalMessage } = useAppSelector((state) => state.ui);

  return (
    <>
      <View style={ModalCardStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={ModalCardStyles.centeredView}>
            <View style={ModalCardStyles.modalView}>
              <Text style={ModalCardStyles.modalText}>{modalMessage}</Text>
              <Pressable
                style={[ModalCardStyles.button, ModalCardStyles.buttonClose]}
                onPress={() => {
                  dispatch(hideModalActionCreator());
                }}
              >
                <Text style={ModalCardStyles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[ModalCardStyles.button, ModalCardStyles.buttonOpen]}
          onPress={() => {
            setModalVisible(true);
          }}
        ></Pressable>
      </View>
    </>
  );
};

export default ModalCard;
