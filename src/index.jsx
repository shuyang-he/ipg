import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";
import "./main.css";
import "./index.css";

try {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.querySelector("#root")
  );
} catch (error) {
  console.log(error);
}
