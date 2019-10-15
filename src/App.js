import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <HomeLayout>
          <Switch>
            <Route exact path="/register" component={Register} />
          </Switch>
        </HomeLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
