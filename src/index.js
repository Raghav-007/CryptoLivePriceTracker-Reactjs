import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Registration from "./Form/form";
import FrontPage from "./Form/FrontPage";
import Payment from "./PAYMENT GATEWAY/payment";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Payment />
  </StrictMode>,
  rootElement
);
