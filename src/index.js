import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import DayJsUtils from "@date-io/dayjs";
ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
