import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminMain from "../pages/AdminMain";
import AdminLayout from "../components/AdminLayout";
import Reservas from "../components/Reservas";
import Sliders from "../components/Sliders";
import Backgrounds from "../pages/Backgrounds";
import Principal from "../pages/Principal";
import Escuelita from "../pages/Escuelita";
import AdminFeatures from "../pages/AdminFeatures";
import FeaturesNew from "../pages/FeaturesNew";

const Admin = ({ match }) => (
  <React.Fragment>
    <AdminLayout>
      <Switch>
        <Route exact path="/admin/reservas" component={Reservas} />
        <Route exact path="/admin/sliders" component={Sliders} />
        <Route exact path="/admin/backgrounds" component={Backgrounds} />
        <Route exact path="/admin/principal" component={Principal} />
        <Route exact path="/admin/escuelita" component={Escuelita} />
        <Route exact path="/admin/features" component={AdminFeatures} />
        <Route exact path="/admin/features/new" component={FeaturesNew} />
        <Route exact path="/admin" component={AdminMain} />
      </Switch>
    </AdminLayout>
  </React.Fragment>
);

export default Admin;
