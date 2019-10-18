import React from "react";
import "../assets/styles_admin/bootstrap.css";
import "../assets/styles_admin/waves.min.css";
import "../assets/styles_admin/style.css";
import NavbarAdmin from "./NavbarAdmin";
import FooterAdmin from "./FooterAdmin";

const AdminLayout = props => {
  return (
    <React.Fragment>
      <div className="loader-bg">
        <div className="loader-bar"></div>
      </div>
      <div className="pcoded-overlay-box"></div>
      <div className="pcoded-container navbar-wrapper">
        <NavbarAdmin />
        {props.children}
        <FooterAdmin />
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
