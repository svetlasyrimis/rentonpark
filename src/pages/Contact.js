import React from "react";
import "../styles/contact.css";
import Background from "../images/background_contact.jpeg";
import Background2 from "../images/background_school2.jpg";
import Logo from "../images/renton_light.png";

function Contact() {
  var Recaptcha = require("react-recaptcha");
  const ImgStyle = {
    height: "150%"
  };
  return (
    <div className="main-container viewSchool">
      <section className="cover parallax">
        <div
          id="carouselExampleIndicators"
          className="carousel slide background-image-holder"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={Background}
                alt="First slide"
              ></img>
              <div className="centered">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                    <img
                      alt="RentonPark"
                      className="imageLogo mb8"
                      src={Logo}
                      draggable="false"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    Si estas interesado en tomar clases, completa con tus datos
                    la planilla que figura a continuación:
                  </h5>
                </div>
                <div className="boxForm">
                  <form
                    className="form-school"
                    role="form"
                    method="post"
                    action="./school/send"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="txtName"> Nombres </label>
                          <input
                            type="text"
                            name="txtName"
                            tabIndex="1"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="txtLast"> Apellido </label>
                          <input
                            type="text"
                            name="txtLast"
                            tabIndex="2"
                            required=""
                          />
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
                                  value="2"
                                  id="dayOne"
                                  name="dayOne"
                                  tabIndex="3"
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
                                  value="3"
                                  id="dayTwo"
                                  name="dayTwo"
                                  tabIndex="4"
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
                                  value="4"
                                  id="dayThree"
                                  name="dayThree"
                                  tabIndex="5"
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
                                  value="5"
                                  id="dayFour"
                                  name="dayFour"
                                  tabIndex="6"
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
                            name="txtPhone"
                            tabIndex="9"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="form-group">
                          <label htmlFor="txtMail"> Email </label>
                          <input
                            type="email"
                            name="txtMail"
                            tabIndex="10"
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
                        <button type="submit">Enviar</button>
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
}

export default Contact;
