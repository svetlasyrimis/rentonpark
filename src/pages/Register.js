import React from "react";

const Register = () => {
  var Recaptcha = require("react-recaptcha");
  return (
    <div className="main-container viewRegister image-register">
      <section className="image-bg overlay parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 boxRegister">
              <div className="feature feature-1 boxed">
                <div className="text-center">
                  <i className="ti-package icon"></i>
                  <h5 className="uppercase">Nuevo Rider</h5>
                </div>
                <div className="boxMessage"></div>
                <div className="boxForm">
                  <form
                    className="form-register"
                    role="form"
                    method="post"
                    action="./register/new"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtName"> Nombres </label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            tabIndex="1"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtLast"> Apellido </label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtLast"
                            tabIndex="2"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group ">
                          <label htmlFor="intGenre"> Sexo </label>
                          <select
                            name="intGenre"
                            id="intGenre"
                            className="form-control"
                            tabIndex="3"
                            required=""
                          >
                            <option value="0">Hombre</option>
                            <option value="1">Mujer</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 col-xs-4">
                        <div className="form-group ">
                          <label htmlFor="txtPrefix"> Celular (Prefijo) </label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtPrefix"
                            tabIndex="4"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-5 col-xs-8">
                        <div className="form-group ">
                          <label htmlFor="txtPhone"> Celular (Número) </label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtPhone"
                            tabIndex="5"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtMail"> Email </label>
                          <input
                            type="email"
                            className="form-control"
                            name="txtMail"
                            tabIndex="6"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtMail"> Usuario </label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtUser"
                            tabIndex="7"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtMail"> Contraseña </label>
                          <input
                            type="password"
                            className="form-control"
                            name="txtPass"
                            tabIndex="8"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtMail"> Repite contraseña </label>
                          <input
                            type="password"
                            className="form-control"
                            name="txtPass2"
                            tabIndex="9"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <Recaptcha
                          sitekey="6LdRBQgUAAAAAI_YwLr-ESi-Lm3AdXKLuX7RE2Bl"
                          render="explicit"
                          hl={"es"}
                        />
                      </div>
                      <div className="col-xs-6">
                        <button type="submit">Registrarme</button>
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

export default Register;
