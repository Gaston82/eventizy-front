import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { useAppSelector } from "../store/hooks";
import Loader from "../components/Loader/Loader";
import ModalCard from "../components/Modal/Modal";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { isLoading, showModal } = useAppSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loader />}
      {showModal && <ModalCard />}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
