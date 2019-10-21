import React from "react";

import "../assets/styles_admin/bootstrap.css";
import "../assets/styles_admin/waves.min.css";
import "../assets/styles_admin/feather.css";
import "../assets/styles_admin/style.css";
import NavbarAdmin from "./NavbarAdmin";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = props => {
  return (
    <React.Fragment>
      <div className="admin-panel">
        <div className="loader-bg">
          <div className="loader-bar"></div>
        </div>
        <div id="pcoded" className="pcoded">
          <div className="pcoded-overlay-box"></div>
          <div className="pcoded-container navbar-wrapper">
            <NavbarAdmin />
            <div className="pcoded-main-container">
              <div className="pcoded-wrapper">
                <SidebarAdmin />
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
