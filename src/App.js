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
import Camp from "./pages/Camp";
import Contact from "./pages/Contact";
import Riders from "./pages/Riders";

const Admin = ({ match }) => (
  <React.Fragment>
    <h1>admin bar</h1>
    <Route path={`${match.path}/1`} render={() => <h2>one</h2>} />
    <Route path={`${match.path}/2`} render={() => <h2>two</h2>} />
  </React.Fragment>
);

const Landing = ({ match }) => (
  <React.Fragment>
    <Switch>
      <Route exact path="/login" component={Login} />
      <HomeLayout>
        <Switch>
          <Route exact path={`${match.path}`} component={Home} />
          <Route exact path={`${match.path}register`} component={Register} />
          <Route exact path={`${match.path}school`} component={School} />
          <Route exact path={`${match.path}features`} component={Features} />
          <Route exact path={`${match.path}bar`} component={Bar} />
          <Route exact path={`${match.path}complex`} component={Complex} />
          <Route exact path={`${match.path}camp`} component={Camp} />
          <Route exact path={`${match.path}contact`} component={Contact} />
          <Route exact path={`${match.path}riders`} component={Riders} />
        </Switch>
      </HomeLayout>
    </Switch>
  </React.Fragment>
);

const App = () => {
  useEffect(() => {
    var current_url = window.location.href;
    if (current_url.includes("/admin")) {
    } else {
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
      var script15 = document.createElement("script");
      script15.src = "assets/js_home/riders.js";
      script15.async = false;
      document.body.appendChild(script15);
      var script9 = document.createElement("script");
      script9.src = "assets/js_home/moment.js";
      script9.async = false;
      document.body.appendChild(script9);
      var script10 = document.createElement("script");
      script10.src = "assets/js_home/calendar.js";
      script10.async = false;
      document.body.appendChild(script10);
      var script11 = document.createElement("script");
      script11.src = "assets/js_home/langes.js";
      script11.async = false;
      document.body.appendChild(script11);
      var script12 = document.createElement("script");
      script12.src = "assets/js_home/tables_jquery.js";
      script12.async = false;
      document.body.appendChild(script12);
      var script13 = document.createElement("script");
      script13.src = "assets/js_home/tables_bootstrap.js";
      script13.async = false;
      document.body.appendChild(script13);
      var script14 = document.createElement("script");
      script14.src = "assets/js_home/cropper.js";
      script14.async = false;
      document.body.appendChild(script14);
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
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
