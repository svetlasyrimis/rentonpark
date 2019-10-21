import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminMain from "../pages/AdminMain";
import AdminLayout from "../components/AdminLayout";

const Admin = ({ match }) => (
  <React.Fragment>
    <AdminLayout>
      <Switch>
        <Route exact path={`${match.path}`} component={AdminMain} />
      </Switch>
    </AdminLayout>
  </React.Fragment>
);

export default Admin;
