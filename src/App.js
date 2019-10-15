import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Styles from "./components/Styles";

function App() {
  return (
    <BrowserRouter>
      <Styles>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Styles>
    </BrowserRouter>
  );
}

export default App;
