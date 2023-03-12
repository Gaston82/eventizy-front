import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { NavigationContainer } from "@react-navigation/native";

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <LoginForm />
    </NavigationContainer>
  </Provider>
);

export default App;
