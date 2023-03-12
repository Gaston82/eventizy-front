import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
