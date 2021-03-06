import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import Loader from "../components/Loader";
import axios from "axios";

const Register = () => {
  var Clipper = require("image-clipper");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCaptcha, setIsCaptcha] = useState("");
  const [cropImage, setCropImage] = useState(undefined);
  const { register, handleSubmit, errors } = useForm();

  var Recaptcha = require("react-recaptcha");

  var verifyCallback = function(response) {
    setIsCaptcha(response);
  };

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    if (isCaptcha) {
      await axios
        .post("http://localhost:3001/auth/signup", data)
        .then(response => {
          let token = response.data.token;
          let role = response.data.role;
          let id = response.data.id;
          let full_name = response.data.full_name;
          window.sessionStorage.setItem("token", token);
          window.sessionStorage.setItem("role", role);
          window.sessionStorage.setItem("id", id);
          window.sessionStorage.setItem("full_name", full_name);
          document.getElementById("link_home").click();
        })
        .catch(error => {
          setIsError(error.response.data.message);
          setIsLoading(false);
        });
    } else {
      setIsError("Por favor verifica el captcha.");
    }

    setIsLoading(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get("http://localhost:3001/api/images_type/register")
      .then(res => {
        let image = res.data[0];
        if (image) {
          let crop_image = image.crop;
          let x = crop_image.x;
          let y = crop_image.y;
          let width = crop_image.width;
          let height = crop_image.height;
          let src_image = "/images/" + image.image.originalname;
          Clipper(src_image, function() {
            this.crop(x, y, width, height).toDataURL(function(dataUrl) {
              setCropImage(dataUrl);
            });
          });
        }
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  var image_base64 = { background: `url(${cropImage})` };

  return (
    <div
      className="viewRegister background-image-holder image-register fadeIn"
      style={image_base64}
    >
      <section className="image-bg overlay parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 boxRegister">
              <div className="feature feature-1 boxed">
                <div className="text-center">
                  <i className="ti-package icon"></i>
                  <h5 className="uppercase">Nuevo Rider</h5>
                </div>
                <div className="boxMessage">{isError && isError}</div>
                <div className="boxForm">
                  <form
                    className="form-register"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label> Nombres </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            tabIndex="1"
                            ref={register({ required: true })}
                          />
                          {errors.name && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label> Apellido </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            tabIndex="2"
                            ref={register({ required: true })}
                          />
                        </div>
                        {errors.lastname && (
                          <b className="color-red">Campo obligatorio</b>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group ">
                          <label> Sexo </label>
                          <select
                            name="sex"
                            className="form-control"
                            tabIndex="3"
                            ref={register({ required: true })}
                          >
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                          </select>
                          {errors.sex && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                      <div className="col-md-3 col-xs-4">
                        <div className="form-group ">
                          <label> Celular (Prefijo) </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone_prefix"
                            tabIndex="4"
                            ref={register({ required: true })}
                          />
                        </div>
                        {errors.phone_prefix && (
                          <b className="color-red">Campo obligatorio</b>
                        )}
                      </div>
                      <div className="col-md-5 col-xs-8">
                        <div className="form-group ">
                          <label> Celular (Número) </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            tabIndex="5"
                            ref={register({ required: true })}
                          />
                          {errors.phone && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label> Email </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            tabIndex="6"
                            ref={register({ required: true })}
                          />
                          {errors.email && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label> Usuario </label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            tabIndex="7"
                            ref={register({ required: true })}
                          />
                          {errors.username && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label> Contraseña </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            tabIndex="8"
                            ref={register({ required: true })}
                          />
                          {errors.password && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="txtMail"> Repite contraseña </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password_confirmation"
                            tabIndex="9"
                            ref={register({ required: true })}
                          />
                          {errors.password_confirmation && (
                            <b className="color-red">Campo obligatorio</b>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <Recaptcha
                          sitekey="6LdRBQgUAAAAAI_YwLr-ESi-Lm3AdXKLuX7RE2Bl"
                          render="explicit"
                          hl={"es"}
                          verifyCallback={verifyCallback}
                        />
                      </div>
                      <div className="col-xs-6">
                        <button type="submit" disabled={isLoading}>
                          Registrarme
                        </button>
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
