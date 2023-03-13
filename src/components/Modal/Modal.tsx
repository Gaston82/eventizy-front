import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { hideModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import ModalCardStyles from "./ModalCardStyles";

const ModalCard = () => {
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={ModalCardStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalCardStyles.centeredView}>
          <View style={ModalCardStyles.modalView}>
            <Text style={ModalCardStyles.modalText}>Hello World!</Text>
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
      >
        <Text style={ModalCardStyles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalCard;
