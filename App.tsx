import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import LoginForm from "./src/components/LoginForm/LoginForm";

const App = (): JSX.Element => (
  <Provider store={store}>
    <LoginForm />
  </Provider>
);

export default App;
