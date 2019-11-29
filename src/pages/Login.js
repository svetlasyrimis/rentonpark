import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import "../assets/styles/bootstrap.css";
import LogoLight from "../assets/images/logo_light.png";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);

    await axios
      .post("http://localhost:3001/auth/login", data)
      .then(response => {
        let token = response.data.token;
        window.sessionStorage.setItem("token", token);
        document.getElementById("link_home").click();
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });

    setIsLoading(false);
  };
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
                <div className="boxMessage text-center color-red">
                  {isError && isError}
                </div>
                <div className="boxForm">
                  <form
                    className="form-login"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group">
                      <label> Usuario </label>
                      <input
                        type="text"
                        name="username"
                        tabIndex="1"
                        ref={register({ required: true })}
                      />
                      {errors.username && (
                        <b className="color-red">Campo obligatorio</b>
                      )}
                    </div>
                    <div className="form-group">
                      <label> Contraseña </label>
                      <input
                        type="password"
                        name="password"
                        tabIndex="2"
                        ref={register({ required: true })}
                      />
                      {errors.password && (
                        <b className="color-red">Campo obligatorio</b>
                      )}
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
                        <button type="submit" disabled={isLoading}>
                          Ingresar
                        </button>
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
