import React from "react";
import Logo from "../assets/images/logo_light.png";

const NavbarAdmin = () => {
  return (
    <React.Fragment>
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
            <a href="index.html">
              <img className="img-fluid" src={Logo} alt="Theme-Logo" />
            </a>
            <a className="mobile-options waves-effect waves-light">
              <i className="feather icon-more-horizontal"></i>
            </a>
          </div>
          <div className="navbar-container container-fluid">
            <ul className="nav-left">
              <li className="header-search">
                <div className="main-search morphsearch-search">
                  <div className="input-group">
                    <span className="input-group-prepend search-close">
                      <i className="feather icon-x input-group-text"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Keyword"
                    />
                    <span className="input-group-append search-btn">
                      <i className="feather icon-search input-group-text"></i>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav-right">
              <li className="header-notification">
                <div className="dropdown-primary dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <i className="feather icon-bell"></i>
                    <span className="badge bg-c-red">5</span>
                  </div>
                  <ul
                    className="show-notification notification-view dropdown-menu"
                    data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut"
                  >
                    <li>
                      <h6>Notifications</h6>
                      <label className="label label-danger">New</label>
                    </li>
                    <li>
                      <div className="media">
                        <img
                          className="img-radius"
                          src="../files/assets/images/avatar-4.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h5 className="notification-user">John Doe</h5>
                          <p className="notification-msg">
                            Lorem ipsum dolor sit amet, consectetuer elit.
                          </p>
                          <span className="notification-time">
                            30 minutes ago
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <img
                          className="img-radius"
                          src="../files/assets/images/avatar-3.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h5 className="notification-user">Joseph William</h5>
                          <p className="notification-msg">
                            Lorem ipsum dolor sit amet, consectetuer elit.
                          </p>
                          <span className="notification-time">
                            30 minutes ago
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <img
                          className="img-radius"
                          src="../files/assets/images/avatar-4.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h5 className="notification-user">Sara Soudein</h5>
                          <p className="notification-msg">
                            Lorem ipsum dolor sit amet, consectetuer elit.
                          </p>
                          <span className="notification-time">
                            30 minutes ago
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-notification">
                <div className="dropdown-primary dropdown">
                  <div
                    className="displayChatbox dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="feather icon-message-square"></i>
                    <span className="badge bg-c-green">3</span>
                  </div>
                </div>
              </li>
              <li className="user-profile header-notification">
                <div className="dropdown-primary dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <img
                      src="../files/assets/images/avatar-4.jpg"
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
                      <a href="#!">
                        <i className="feather icon-settings"></i> Settings
                      </a>
                    </li>
                    <li>
                      <a href="user-profile.html">
                        <i className="feather icon-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="email-inbox.html">
                        <i className="feather icon-mail"></i> My Messages
                      </a>
                    </li>
                    <li>
                      <a href="auth-lock-screen.html">
                        <i className="feather icon-lock"></i> Lock Screen
                      </a>
                    </li>
                    <li>
                      <a href="auth-normal-sign-in.html">
                        <i className="feather icon-log-out"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarAdmin;