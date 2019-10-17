import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import School from "./pages/School";

const App = () => {
  useEffect(() => {
    var script1 = document.createElement("script");
    script1.src = "assets/js_home/jquery.js";
    script1.async = false;
    document.body.appendChild(script1);
    var script2 = document.createElement("script");
    script2.src = "assets/js_home/jquery_migrate.js";
    script2.async = false;
    document.body.appendChild(script2);
    var script3 = document.createElement("script");
    script3.src = "assets/js_home/bootstrap.js";
    script3.async = false;
    document.body.appendChild(script3);
    var script4 = document.createElement("script");
    script4.src = "assets/js_home/general.js";
    script4.async = false;
    document.body.appendChild(script4);
  });
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
