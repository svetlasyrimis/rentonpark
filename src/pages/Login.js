import React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/bootstrap_theme.css";
import "../assets/styles/jquery_ui.css";
import "../assets/styles/nav_footer.css";
import "../assets/styles/views.css";
import "../assets/styles/custom.css";
import "../assets/styles/elements.css";
import LogoLight from "../assets/images/logo_light.png";

const Login = () => {
  return (
    <div className="viewLogin background-image-holder image-login fadeIn">
      <section className="image-bg overlay parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 boxLogin">
              <div className="feature feature-1 boxed">
                <div className="text-center">
                  <i className="ti-package icon"></i>
                  <h5 className="uppercase">Iniciar Sesión</h5>
                </div>
                <div className="boxForm">
                  <form
                    className="form-login"
                    role="form"
                    method="post"
                    action="./login/in"
                  >
                    <div className="form-group">
                      <label> Usuario </label>
                      <input type="text" name="txtUser" tabIndex="1" />
                    </div>
                    <div className="form-group">
                      <label> Contraseña </label>
                      <input type="password" name="txtPass" tabIndex="2" />
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <img
                          src={LogoLight}
                          alt="Mini Logo"
                          className="logo-login"
                        />
                      </div>
                      <div className="col-xs-6">
                        <button type="submit">Ingresar</button>
                      </div>
                    </div>
                    <hr />
                    <h4>Si entrás por primera vez</h4>
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                        <a className="button" href="./register">
                          {" "}
                          Registrate{" "}
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
