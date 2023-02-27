import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { store } from "./Store/store";
import { overallSummaryApi } from "../src/Store/Slices/overallSummarySlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={overallSummaryApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
