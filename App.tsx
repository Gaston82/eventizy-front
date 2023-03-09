import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { Text, View } from "react-native";

const App = (): JSX.Element => (
  <Provider store={store}>
    <View style={{ margin: 65 }}>
      <Text>Hello world </Text>
    </View>
  </Provider>
);

export default App;
