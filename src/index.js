import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
