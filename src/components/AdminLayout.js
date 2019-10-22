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
                <div className="pcoded-content">
                  <div className="page-header">
                    <div className="page-block">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div className="page-header-title">
                            <h4 className="m-b-10">Admin Renton</h4>
                          </div>
                          <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="/">
                                <i className="feather icon-home"></i>
                              </a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="/">Volver a página principal</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">
                      <div className="page-body">{props.children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
