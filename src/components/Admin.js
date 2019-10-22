import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminMain from "../pages/AdminMain";
import AdminLayout from "../components/AdminLayout";
import Reservas from "../components/Reservas";
import Sliders from "../components/Sliders";

const Admin = ({ match }) => (
  <React.Fragment>
    <AdminLayout>
      <Switch>
        <Route exact path="/admin/reservas" component={Reservas} />
        <Route exact path="/admin/sliders" component={Sliders} />
        <Route exact path="/admin" component={AdminMain} />
      </Switch>
    </AdminLayout>
  </React.Fragment>
);

export default Admin;
