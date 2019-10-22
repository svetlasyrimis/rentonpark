import React from "react";
import Logo from "../assets/images/logo_light.png";
import Profile from "../assets/images/default-profile.jpg";

const NavbarAdmin = () => {
  return (
    <nav className="navbar header-navbar pcoded-header">
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <a
            className="mobile-menu waves-effect waves-light"
            id="mobile-collapse"
            href="#!"
          >
            <i className="feather icon-toggle-right"></i>
          </a>
          <a href="/">
            <img className="img-fluid" src={Logo} alt="Theme-Logo" />
          </a>
          <a className="mobile-options waves-effect waves-light">
            <i className="feather icon-more-horizontal"></i>
          </a>
        </div>
        <div className="navbar-container container-fluid">
          <ul className="nav-right">
            <li className="user-profile header-notification">
              <div className="dropdown-primary dropdown">
                <div className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src={Profile}
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                  <span>John Doe</span>
                  <i className="feather icon-chevron-down"></i>
                </div>
                <ul
                  className="show-notification profile-notification dropdown-menu"
                  data-dropdown-in="fadeIn"
                  data-dropdown-out="fadeOut"
                >
                  <li>
                    <a href="/">
                      <i className="feather icon-log-out"></i> Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
