import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { View } from "react-native";

const App = (): JSX.Element => (
  <Provider store={store}>
    <View>
      <LoginForm />
    </View>
  </Provider>
);

export default App;
