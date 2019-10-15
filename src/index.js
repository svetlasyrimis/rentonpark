import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "font-awesome/css/font-awesome.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
