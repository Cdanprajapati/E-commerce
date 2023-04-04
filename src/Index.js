import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./Index.css";
import { store } from "./ReduxTool/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
