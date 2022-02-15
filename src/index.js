import React from "react";
import ReactDOM from "react-dom";
import "./components/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/context.jsx";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
