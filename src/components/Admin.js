import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminMain from "../pages/AdminMain";
import AdminLayout from "../components/AdminLayout";
import Reservas from "../components/Reservas";

const Admin = ({ match }) => (
  <React.Fragment>
    <AdminLayout>
      <Switch>
        <Route exact path="/admin/reservas" component={Reservas} />
        <Route exact path="/admin" component={AdminMain} />
      </Switch>
    </AdminLayout>
  </React.Fragment>
);

export default Admin;
