import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import ModalCardStyles from "./ModalCardStyles";

const ModalCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
      >
        <Text style={ModalCardStyles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalCard;
