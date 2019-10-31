import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import Background2 from "../assets/images/background_school2.jpg";

function Contact({ type }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCaptcha, setIsCaptcha] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const ImgStyle = {
    height: "150%"
  };

  var Recaptcha = require("react-recaptcha");

  var verifyCallback = function(response) {
    setIsCaptcha(response);
  };

  const resetForm = () => {
    let form = document.getElementById("form-school");
    form[0].value = "";
    form[1].value = "";
    form[2].checked = false;
    form[3].checked = false;
    form[4].checked = false;
    form[5].checked = false;
    form[6].value = "";
    form[7].value = "";
  };

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    data.type = type;
    let days = [data.day_one, data.day_two, data.day_three, data.day_four];
    days = days.filter(d => d != false);
    data.days = days;
    if (isCaptcha && days.length > 0) {
      await axios
        .post("http://localhost:3001/api/messages", data)
        .then(response => {
          setIsMessage(
            "Mensaje enviado correctamente!!!! Nos contactaremos pronto contigo."
          );
          resetForm();
        })
        .catch(error => {
          setIsError(error.response.data.message);
          setIsLoading(false);
        });
    } else if (days.length == 0) {
      setIsError("Debe seleccionar por lo menos un día");
    } else {
      setIsError("Por favor verifica el captcha.");
    }

    setIsLoading(false);
  };
  return (
    <section className="image-bg overlay parallax">
      <div className="background-image-holder fadeIn">
        <img
          alt="Background"
          className="background-image"
          style={ImgStyle}
          src={Background2}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 boxSchool">
            <div className="feature feature-1 boxed">
              <div className="text-center">
                <i className="ti-package icon"></i>
                <h5 className="uppercase">
                  Si estas interesado en tomar clases, completa con tus datos la
                  planilla que figura a continuación:
                </h5>
              </div>
              <div className="boxMessage color-red text-center">
                {isError && isError}
              </div>
              <div className="boxMessage color-success text-center">
                {isMessage && isMessage}
              </div>
              <div className="boxForm">
                <form
                  className="form-school"
                  id="form-school"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="txtName"> Nombres </label>
                        <input
                          type="text"
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
                      <div className="form-group">
                        <label htmlFor="txtLast"> Apellido </label>
                        <input
                          type="text"
                          name="lastname"
                          tabIndex="2"
                          ref={register({ required: true })}
                        />
                        {errors.lastname && (
                          <b className="color-red">Campo obligatorio</b>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="cmbDays">
                          {" "}
                          Dias (de martes a viernes){" "}
                        </label>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="inputCheck">
                              <input
                                type="checkbox"
                                value="Martes"
                                id="dayOne"
                                name="day_one"
                                tabIndex="3"
                                ref={register}
                              />
                              <label
                                htmlFor="dayOne"
                                className="label-default"
                              ></label>
                            </div>
                            <label htmlFor="">martes</label>
                          </div>
                          <div className="col-md-3">
                            <div className="inputCheck">
                              <input
                                type="checkbox"
                                value="Miercoles"
                                id="dayTwo"
                                name="day_two"
                                tabIndex="4"
                                ref={register}
                              />
                              <label
                                htmlFor="dayTwo"
                                className="label-default"
                              ></label>
                            </div>
                            <label htmlFor="">miércoles</label>
                          </div>
                          <div className="col-md-3">
                            <div className="inputCheck">
                              <input
                                type="checkbox"
                                value="Jueves"
                                id="dayThree"
                                name="day_three"
                                tabIndex="5"
                                ref={register}
                              />
                              <label
                                htmlFor="dayThree"
                                className="label-default"
                              ></label>
                            </div>
                            <label htmlFor="">jueves</label>
                          </div>
                          <div className="col-md-3">
                            <div className="inputCheck">
                              <input
                                type="checkbox"
                                value="Viernes"
                                id="dayFour"
                                name="day_four"
                                tabIndex="6"
                                ref={register}
                              />
                              <label
                                htmlFor="dayFour"
                                className="label-default"
                              ></label>
                            </div>
                            <label htmlFor="">viernes</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="txtPhone"> Celular (Número) </label>
                        <input
                          type="text"
                          name="phone"
                          tabIndex="9"
                          ref={register({ required: true })}
                        />
                        {errors.phone && (
                          <b className="color-red">Campo obligatorio</b>
                        )}
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="form-group">
                        <label htmlFor="txtMail"> Email </label>
                        <input
                          type="email"
                          name="email"
                          tabIndex="10"
                          ref={register({ required: true })}
                        />
                        {errors.email && (
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
                        Enviar
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
  );
}

export default Contact;
