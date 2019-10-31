import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Slider from "../components/Slider";
import Section from "../components/Section";
import Background2 from "../assets/images/background_school2.jpg";

const School = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataBackground, setIsDataBackground] = useState(undefined);
  const [isDataSections, setIsDataSections] = useState(undefined);
  const [isLoadingSection, setIsLoadingSection] = useState(true);

  var Recaptcha = require("react-recaptcha");
  const ImgStyle = {
    height: "150%"
  };

  const fetchDataBackground = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/images_type/escuelita")
      .then(res => {
        setIsDataBackground(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  const fetchDataSections = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/sections_type/escuelita")
      .then(res => {
        setIsDataSections(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoadingSection(false);
      });
    setIsLoadingSection(false);
  };

  useEffect(() => {
    fetchDataBackground();
    fetchDataSections();
  }, []);

  if (isLoading || isLoadingSection) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="main-container viewSchool">
      <section className="cover parallax">
        <div
          id="carouselExampleIndicators"
          className="carousel slide background-image-holder"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {isDataBackground.map((background, index) => (
              <Slider index={index} data={background} key={index} />
            ))}
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
      {isDataSections.map((section, index) => (
        <Section data={section} key={index} title="" />
      ))}
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
