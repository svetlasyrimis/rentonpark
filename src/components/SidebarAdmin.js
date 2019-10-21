import React from "react";

const SidebarAdmin = () => {
  return (
    <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar">
        <ul className="pcoded-item">
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"></i>
              </span>
              <span className="pcoded-mtext">Navigation</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
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
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Page layouts</span>
                  <span className="pcoded-badge label label-warning">NEW</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" pcoded-hasmenu">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Vertical</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className=" ">
                        <a
                          href="menu-static.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Static Layout</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a
                          href="menu-header-fixed.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Header Fixed</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a
                          href="menu-compact.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Compact</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a
                          href="menu-sidebar.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Sidebar Fixed</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className=" pcoded-hasmenu">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Horizontal</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className=" ">
                        <a
                          href="menu-horizontal-static.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Static Layout</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a
                          href="menu-horizontal-fixed.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Fixed layout</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a
                          href="menu-horizontal-icon.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Static With Icon</span>
                        </a>
                      </li>
                      <li className=" ">
                        <a
                          href="menu-horizontal-icon-fixed.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Fixed With Icon</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className=" ">
                    <a
                      href="menu-bottom.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Bottom Menu</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="box-layout.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Box Layout</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="menu-rtl.html"
                      target="_blank"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">RTL</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a href="navbar-light.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext" data-i18n="nav.navigate.main">
                    Navigation
                  </span>
                </a>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Widget</span>
                  <span className="pcoded-badge label label-danger">100+</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="widget-statistic.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Statistic</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="widget-data.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Data</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="widget-chart.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Chart Widget</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="widget-chart-advance.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Advance Widgets</span>
                      <span className="pcoded-badge label label-info">25+</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-box"></i>
              </span>
              <span className="pcoded-mtext">UI Element</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Basic Components</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a href="alert.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Alert</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="breadcrumb.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Breadcrumbs</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="button.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Button</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="box-shadow.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Box-Shadow</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="accordion.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Accordion</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="generic-className.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Generic className</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="tabs.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Tabs</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="color.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Color</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="label-badge.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Label Badge</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="progress-bar.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Progress Bar</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="preloader.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Pre-Loader</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="list.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">List</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="tooltip.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Tooltip And Popover</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="typography.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Typography</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="other.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Other</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Advance Components</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="draggable.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Draggable</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="bs-grid.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Grid Stack</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="light-box.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Light Box</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="modal.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Modal</span>
                    </a>
                  </li>

                  <li className=" ">
                    <a
                      href="notification.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Notifications</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="notify.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">PNOTIFY</span>
                      <span className="pcoded-badge label label-info">NEW</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="rating.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Rating</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="range-slider.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Range Slider</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="slider.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Slider</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="syntax-highlighter.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Syntax Highlighter</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="tour.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Tour</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="treeview.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Tree View</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="nestable.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Nestable</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="toolbar.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Toolbar</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="x-editable.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">X-Editable</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Extra Components</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="session-timeout.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Session Timeout</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="session-idle-timeout.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Session Idle Timeout</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="offline.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Offline</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" ">
                <a href="animation.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Animations</span>
                </a>
              </li>
              <li className=" ">
                <a href="sticky.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Sticky Notes</span>
                  <span className="pcoded-badge label label-danger">HOT</span>
                </a>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Icons</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="icon-font-awesome.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Font Awesome</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-themify.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Themify</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-simple-line.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Simple Line Icon</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="icon-ion.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Ion Icon</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-material-design.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Material Design</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-icofonts.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Ico Fonts</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-weather.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Weather Icon</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-typicons.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Typicons</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="icon-flags.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Flags</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-clipboard"></i>
              </span>
              <span className="pcoded-mtext">Forms</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Form Components</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="form-elements-component.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Form Components</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="form-elements-add-on.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Form-Elements-Add-On</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="form-elements-advance.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">
                        Form-Elements-Advance
                      </span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="form-validation.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Form Validation</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" ">
                <a href="form-picker.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Form Picker</span>
                  <span className="pcoded-badge label label-warning">NEW</span>
                </a>
              </li>

              <li className=" ">
                <a href="form-select.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Form Select</span>
                </a>
              </li>
              <li className=" ">
                <a href="form-masking.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Form Masking</span>
                </a>
              </li>
              <li className=" ">
                <a href="form-wizard.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Form Wizard</span>
                </a>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Ready To Use</span>
                  <span className="pcoded-badge label label-danger">HOT</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="ready-cloned-elements-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Cloned Elements Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-currency-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Currency Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-form-booking.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Booking Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-form-booking-multi-steps.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">
                        Booking Multi Steps Form
                      </span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-form-comment.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Comment Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-form-contact.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Contact Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-job-application-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Job Application Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-js-addition-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">JS Addition Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-login-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Login Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-popup-modal-form.html"
                      target="_blank"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Popup Modal Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-registration-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Registration Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-review-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Review Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-subscribe-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Subscribe Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-suggestion-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Suggestion Form</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="ready-tabs-form.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Tabs Form</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-credit-card"></i>
              </span>
              <span className="pcoded-mtext">Tables</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Bootstrap Table</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="bs-basic-table.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Basic Table</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="bs-table-sizing.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Sizing Table</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="bs-table-border.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Border Table</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="bs-table-styling.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Styling Table</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Data Table</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a href="dt-basic.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Basic Initialization</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-advance.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">
                        Advance Initialization
                      </span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-styling.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Styling</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="dt-api.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">API</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="dt-ajax.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Ajax</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-server-side.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Server Side</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-plugin.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Plug-In</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-data-sources.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Data Sources</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Dt Extensions</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className=" ">
                    <a
                      href="dt-ext-autofill.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">AutoFill</span>
                    </a>
                  </li>
                  <li className="pcoded-hasmenu">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Button</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className=" ">
                        <a
                          href="dt-ext-basic-buttons.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Basic Button</span>
                        </a>
                      </li>

                      <li className=" ">
                        <a
                          href="dt-ext-buttons-html-5-data-export.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">
                            Html-5 Data Export
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-col-reorder.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Col Reorder</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-fixed-columns.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Fixed Columns</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-fixed-header.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Fixed Header</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-key-table.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Key Table</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-responsive.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Responsive</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-row-reorder.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Row Reorder</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-scroller.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Scroller</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      href="dt-ext-select.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Select Table</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" ">
                <a href="foo-table.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">FooTable</span>
                </a>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Handson Table</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="handson-appearance.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Appearance</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-data-operation.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Data Operation</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-rows-cols.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Rows Columns</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-columns-only.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Columns Only</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-cell-features.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Cell Features</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-cell-types.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Cell Types</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-integrations.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Integrations</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-rows-only.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Rows Only</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="handson-utilities.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Utilities</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a
                  href="editable-table.html"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Editable Table</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-pie-chart"></i>
              </span>
              <span className="pcoded-mtext">Chart And Maps</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Charts</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="chart-google.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Google Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-echart.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Echarts</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-chartjs.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">ChartJs</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-list.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">List Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-float.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Float Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-knob.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Knob chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-morris.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Morris Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-nvd3.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Nvd3 Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-peity.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Peity Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-radial.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Radial Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-rickshaw.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Rickshaw Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="chart-sparkline.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Sparkline Chart</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="chart-c3.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">C3 Chart</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Maps</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="map-google.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Google Maps</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="map-vector.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Vector Maps</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="map-api.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">
                        Google Map Search API
                      </span>
                    </a>
                  </li>
                  <li className="">
                    <a href="location.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Location</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a
                  href="../files/extra-pages/landingpage/index.html"
                  target="_blank"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Landing Page</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-unlock"></i>
              </span>
              <span className="pcoded-mtext">Pages</span>
            </a>
            <ul className="pcoded-submenu">
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Authentication</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="pcoded-hasmenu">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Login</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className="">
                        <a
                          href="auth-normal-sign-in.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Simple</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="auth-normal-sign-in-header-footer.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">
                            Header &amp; Footer
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="auth-sign-in-social.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Social</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="auth-sign-in-social-header-footer.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">
                            Social With Header &amp; Footer
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pcoded-hasmenu">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Registration</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className="">
                        <a
                          href="auth-sign-up.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Simple</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="auth-sign-up-header-footer.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">
                            Header &amp; Footer
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="auth-sign-up-social.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Social</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="auth-sign-up-social-header-footer.html"
                          target="_blank"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">
                            Social With Header &amp; Footer
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="auth-multi-step-sign-up.html"
                      target="_blank"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">
                        Multi Step Registration
                      </span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="auth-reset-password.html"
                      target="_blank"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Forgot Password</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="auth-lock-screen.html"
                      target="_blank"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Lock Screen</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="auth-modal.html"
                      target="_blank"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Modal</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Maintenance</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="error.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Error</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="comming-soon.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Comming Soon</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="offline-ui.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Offline UI</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">User Profile</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="timeline.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Timeline</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="timeline-social.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Timeline Social</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="user-profile.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">User Profile</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="user-card.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">User Card</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">E-Commerce</span>
                  <span className="pcoded-badge label label-danger">NEW</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="product.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Product</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="product-list.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Product List</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="product-edit.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Product Edit</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="product-detail.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Product Detail</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="product-cart.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Product Card</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="product-payment.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Credit Card Form</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Email</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="email-compose.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Compose Email</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="email-inbox.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Inbox</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="email-read.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Read Mail</span>
                    </a>
                  </li>
                  <li className="pcoded-hasmenu ">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Email Template</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className="">
                        <a
                          href="../files/extra-pages/email-templates/email-welcome.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Welcome Email</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../files/extra-pages/email-templates/email-password.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Reset Password</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../files/extra-pages/email-templates/email-newsletter.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Newsletter Email</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../files/extra-pages/email-templates/email-launch.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">App Launch</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../files/extra-pages/email-templates/email-activation.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Activation Code</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-award"></i>
              </span>
              <span className="pcoded-mtext">App</span>
            </a>
            <ul className="pcoded-submenu">
              <li className=" ">
                <a href="chat.html" className="waves-effect waves-dark">
                  <span className="pcoded-mtext">Chat</span>
                </a>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Social</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="fb-wall.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Wall</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="message.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Messages</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Task</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="task-list.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Task List</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="task-board.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Task Board</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="task-detail.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Task Detail</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="issue-list.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Issue List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">To-Do</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="todo.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">To-Do</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="notes.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Notes</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Gallery</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="gallery-grid.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Gallery-Grid</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="gallery-masonry.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Masonry Gallery</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="gallery-advance.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Advance Gallery</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Search</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="search-result.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Simple Search</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="search-result2.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Grouping Search</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu ">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Job Search</span>
                  <span className="pcoded-badge label label-danger">NEW</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a
                      href="job-card-view.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Card View</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="job-details.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Job Detailed</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="job-find.html" className="waves-effect waves-dark">
                      <span className="pcoded-mtext">Job Find</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="job-panel-view.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Job Panel View</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pcoded-hasmenu">
                <a
                  href="javascript:void(0)"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-mtext">Extension</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="pcoded-hasmenu ">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Editor</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className="">
                        <a
                          href="ck-editor.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">CK-Editor</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="wysiwyg-editor.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">WYSIWYG Editor</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="ace-editor.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Ace Editor</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="long-press-editor.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">
                            Long Press Editor
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pcoded-hasmenu ">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Invoice</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className="">
                        <a
                          href="invoice.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Invoice</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="invoice-summary.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Invoice Summary</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="invoice-list.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Invoice List</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pcoded-hasmenu ">
                    <a
                      href="javascript:void(0)"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Event Calendar</span>
                    </a>
                    <ul className="pcoded-submenu">
                      <li className="">
                        <a
                          href="event-full-calender.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">Full Calendar</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="event-clndr.html"
                          className="waves-effect waves-dark"
                        >
                          <span className="pcoded-mtext">CLNDER</span>
                          <span className="pcoded-badge label label-info">
                            NEW
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="image-crop.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Image Cropper</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="file-upload.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">File Upload</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="change-loges.html"
                      className="waves-effect waves-dark"
                    >
                      <span className="pcoded-mtext">Change Loges</span>
                      <span className="pcoded-badge label label-warning">
                        1.0
                      </span>
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
