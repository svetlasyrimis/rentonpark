import React from "react";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar">
        <ul className="pcoded-item">
          <li className="pcoded-hasmenu">
            <a href="#" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"></i>
              </span>
              <span className="pcoded-mtext">Reservas</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="">
                <Link to="/admin/reservas" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Ver todas</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="#" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"></i>
              </span>
              <span className="pcoded-mtext">Configuración</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="">
                <Link to="/admin/sliders" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Sliders</span>
                </Link>
              </li>
              <li className="">
                <Link
                  to="/admin/backgrounds"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Backgrounds</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarAdmin;
