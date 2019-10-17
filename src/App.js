import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import School from "./pages/School";
import Features from "./pages/Features";
import Bar from "./pages/Bar";
import Complex from "./pages/Complex";

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
    var script5 = document.createElement("script");
    script5.src = "assets/js_home/flexslider.js";
    script5.async = false;
    document.body.appendChild(script5);
    var script6 = document.createElement("script");
    script6.src = "assets/js_home/flickr.js";
    script6.async = false;
    document.body.appendChild(script6);
    var script7 = document.createElement("script");
    script7.src = "assets/js_home/lightbox.js";
    script7.async = false;
    document.body.appendChild(script7);
    var script8 = document.createElement("script");
    script8.src = "assets/js_home/parallax.js";
    script8.async = false;
    document.body.appendChild(script8);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <HomeLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/school" component={School} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/bar" component={Bar} />
            <Route exact path="/complex" component={Complex} />
          </Switch>
        </HomeLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
