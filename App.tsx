import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import LoginForm from "./src/components/LoginForm/LoginForm";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
