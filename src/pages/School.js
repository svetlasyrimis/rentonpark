import React, { useEffect } from "react";
import Logo from "../images/renton_light.png";
import Background from "../images/background_school.jpeg";
import Background2 from "../images/background_school2.jpg";
import Image1 from "../images/school_image1.jpeg";
import Image2 from "../images/school_image2.png";

const School = (props, context) => {
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
                    <h1 className="fontTide">Escuelita</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3 className="fontLemonMilk mb0 p32 p0-xs">
                APRENDE CON LOS <span className="colorSkin">MEJORES</span>
              </h3>
              <h2 className="fontTide">Renton</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="image-square">
        <div className="col-md-6 image">
          <div className="background-image-holder fadeIn">
            <img alt="image" className="full-image" src={Image1} />
          </div>
        </div>
        <div className="col-md-6 content right">
          <h3 className="fontLemonMilk">Información</h3>
          <hr />
          <p className="mb0"></p>
          <p>
            <b>INSCRIPCIÓN VÍA INSTA</b>: @RENTONESCUELADEWAKE
          </p>
          <p>
            <b>D</b>
            <span>ÍAS y HORARIOS</span>: Coordinar con el instructor&nbsp;
          </p>
          <p>
            <b>ESCUELITA:</b> $500 P/CLASE
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; $700 2 DÍAS A LA SEMANA
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; $900 LUNES A VIERNES
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; (Incluye el equipo completo p/compartir)
          </p>
          <p>
            <b>CLASE PERSONALIZADA:</b>&nbsp; $800 LUNES A VIERNES
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $1000 SÁBADOS/DOMINGOS/FERIADOS
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(incluye equipo completo)
          </p>
          <p>
            <b>CLASE GRUPAL:&nbsp;&nbsp;</b>$2100 HORA DE CABLE C/INSTRUCTOR
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (máx. 3 personas NO
            incluye equipo)
          </p>
          <p>
            <br />
          </p>
          <p></p>
        </div>
      </section>
      <section className="image-square">
        <div className="col-md-6 image right">
          <div className="background-image-holder fadeIn">
            <img alt="image" className="full-image" src={Image2} />
          </div>
        </div>
        <div className="col-md-6 content">
          <h3 className="fontLemonMilk">Escuelita</h3>
          <hr />
          <p className="mb0"></p>
          <p>
            La escuelita tiene como objetivo fomentar el deporte a nivel local.
            Incentivando, desde los mas jóvenes, a practicar y disfrutar de esta
            disciplina llena de desafíos, que año tras año crece a nivel
            mundial.
          </p>
          <p></p>
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
};

export default School;
