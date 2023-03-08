import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const App = (): JSX.Element => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default App;
