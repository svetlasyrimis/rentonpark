import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import School from "../pages/School";
import Features from "../pages/Features";
import Bar from "../pages/Bar";
import Complex from "../pages/Complex";
import Camp from "../pages/Camp";
import Contact from "../pages/Contact";
import Riders from "../pages/Riders";

const Landing = ({ match }) => (
  <React.Fragment>
    <Switch>
      <HomeLayout>
        <Switch>
          <Route exact path={`${match.path}login`} component={Login} />
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

export default Landing;
