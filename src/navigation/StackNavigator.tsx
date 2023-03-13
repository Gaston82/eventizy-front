import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { useAppSelector } from "../store/hooks";
import { SafeAreaView } from "react-native";
import Loader from "../components/Loader/Loader";
import ModalCard from "../components/Modal/Modal";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { isLoading, showModal } = useAppSelector((state) => state.ui);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {showModal && <ModalCard />}
      {isLoading && <Loader />}
      {showModal && <ModalCard />}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigator;
