import React from "react";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar">
        <ul className="pcoded-item">
          <li className="pcoded-hasmenu">
            <a href="#reservas" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"></i>
              </span>
              <span className="pcoded-mtext">Reservas</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="">
                <Link
                  to="/admin/reservas"
                  className="waves-effect waves-dark"
                  id="all_reservations"
                >
                  <span className="pcoded-mtext">Ver todas</span>
                </Link>
              </li>
              <li className="">
                <Link
                  to="/admin/reservas/nuevo"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Nueva Reserva</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="#configuracion" className="waves-effect waves-dark">
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
              <li
                className="pcoded-hasmenu is-hover"
                subitem-icon="style1"
                dropdown-icon="style1"
              >
                <a href="#principal" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Principal</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <Link
                      to="/admin/principal"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Ver todos</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/admin/principal/nuevo"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Agregar Nuevo</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="pcoded-hasmenu is-hover"
                subitem-icon="style1"
                dropdown-icon="style1"
              >
                <a href="#escuelita" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Escuelita</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <Link
                      to="/admin/escuelita"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Ver todos</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/admin/escuelita/nuevo"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Agregar Nuevo</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="">
                <Link to="/admin/tarifas" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Tarifas</span>
                </Link>
              </li>
              <li
                className="pcoded-hasmenu is-hover"
                subitem-icon="style1"
                dropdown-icon="style1"
              >
                <a href="#features" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Features</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <Link
                      to="/admin/features"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Ver todos</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/admin/features/nuevo"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Agregar Nuevo</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="pcoded-hasmenu is-hover"
                subitem-icon="style1"
                dropdown-icon="style1"
              >
                <a href="#sesiones" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Sesiones</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <Link
                      to="/admin/sesiones"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Ver todos</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/admin/sesiones/nuevo"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Agregar Nueva</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="#general" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"></i>
              </span>
              <span className="pcoded-mtext">General</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="">
                <Link to="/admin/packs" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Asignar Packs</span>
                </Link>
              </li>
              <li className="">
                <Link to="/admin/riders" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Riders</span>
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
