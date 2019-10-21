import React from "react";

const SidebarAdmin = () => {
  return (
    <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar">
        <ul className="pcoded-item">
          <li className="pcoded-hasmenu">
            <a href="" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"></i>
              </span>
              <span className="pcoded-mtext">Navigation</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu">
                <a href="" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Dashboard</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="index.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Default</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dashboard-ecommerce.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Ecommerce</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dashboard-crm.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">CRM</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dashboard-analytics.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Analytics</span>
                      <span className="pcoded-badge label label-info ">
                        NEW
                      </span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dashboard-project.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Project</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarAdmin;
