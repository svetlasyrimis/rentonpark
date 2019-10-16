import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import School from "./pages/School";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <HomeLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/school" component={School} />
          </Switch>
        </HomeLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
