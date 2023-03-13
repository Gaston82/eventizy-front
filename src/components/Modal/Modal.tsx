import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { useAppSelector } from "../../store/hooks";
import ModalCardStyles from "./ModalCardStyles";

const ModalCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
                  setModalVisible(!modalVisible);
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
