import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
import { convertFromJSONToHTML } from "../Helpers";
import "../assets/styles/riders.css";
import "../assets/styles/calendar.css";
import "../assets/styles/fPlugins/plugTables/tables.css";
import "../assets/styles/cropper.css";

function Riders() {
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataBackground, setIsDataBackground] = useState(undefined);
  const [isReglamento, setIsReglamento] = useState("");
  const [main_session, setMainSession] = useState("");

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/main_session")
      .then(res => {
        setMainSession(res.data._id);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/images_type/cablepark")
      .then(res => {
        setIsDataBackground(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/sections_type/reglamento_cablepark")
      .then(res => {
        setIsReglamento(res.data[0]);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsInitLoading(false);
      });

    setIsInitLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isInitLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <React.Fragment>
      <div className="main-container viewRiders">
        <section className="image-bg overlay parallax">
          <div className="background-image-holder fadeIn">
            {isDataBackground.map((background, index) => (
              <Slider index={index} data={background} key={index} title="" />
            ))}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 boxRiders">
                <h1 className="fontTide text-center">Cable Park</h1>
                <div className="feature feature-1 boxed">
                  <div className="text-center">
                    <i className="ti-package icon"></i>
                    <h5 className="uppercase">Reservar</h5>
                  </div>
                  <div className="dLeyends">
                    <div className="col-md-4">
                      <div className="dColour dPending"></div>
                      <span className="sText">Pendiente Confirmación</span>
                    </div>
                    <div className="col-md-4">
                      <div className="dColour dSuccess"></div>
                      <span className="sText">Reservado</span>
                    </div>
                    <div className="col-md-4">
                      <div className="dColour dOwn"></div>
                      <span className="sText">Turno Ocupado</span>
                    </div>
                  </div>
                  <div className="dReglament">
                    <div className="col-xs-12">
                      <h4>Reglamento</h4>
                      <span className="textReglament">
                        {isReglamento.description && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: convertFromJSONToHTML(
                                isReglamento.description
                              )
                            }}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="dGrilla">
                    <div className="col-xs-12">
                      <a href="#sectionCalendar" className="linkNavigation">
                        <h2 className="fontTide">Ver Grilla</h2>
                        <i className="fa fa-chevron-down fa-2x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionCalendar" className="sectionCalendar">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <input type="hidden" id="vType" name="vType" value="1"></input>
                <input
                  type="hidden"
                  id="idUser"
                  name="idUser"
                  value="5de09f73f06429601d97236e"
                ></input>
                <input
                  type="hidden"
                  id="vUser"
                  name="vUser"
                  value="User Test"
                ></input>
                <input
                  type="hidden"
                  id="vProduct"
                  name="vProduct"
                  value={main_session}
                ></input>
                <div className="boxControl">
                  <h3>Seleccionar turnos</h3>
                  <span className="barSeparator">
                    <span className="hashLeft">//////////////////////////</span>

                    <i className="rentonGraphics rentonWaves"></i>
                    <span className="hashRight">
                      //////////////////////////
                    </span>
                  </span>
                  <div className="boxDay">
                    <div className="col-md-3">
                      <i id="fPrev" className="fa fa-chevron-left fa-2x"></i>
                    </div>
                    <div className="col-md-6">
                      <h4 id="sDate">09/05/2017</h4>
                    </div>
                    <div className="col-md-3">
                      <i id="fNext" className="fa fa-chevron-right fa-2x"></i>
                    </div>
                  </div>
                </div>
                <div className="boxCalendar">
                  <div id="dCalendar"></div>
                  <div id="dLoading">
                    <div className="dLoader"></div>
                    <i className="fa fa-spinner fa-spin fa-4x fa-fw"></i>
                  </div>
                </div>
                <div className="boxActions">
                  <div className="col-md-4 col-md-offset-4">
                    <button
                      data-toggle="modal"
                      data-target="#dConfirm"
                      type="submit"
                    >
                      Confirmar reserva
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          id="dConfirm"
          className="modal fade dConfirm error-dialog"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content background-modal">
              <div className="modal-header dialog-header-error">
                <h4 className="modal-title">Confirmar Reserva</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div id="dList"></div>
              </div>
              <div className="modal-footer">
                <h4 className="text-right">
                  Total: $ <span id="sTotal"></span>
                </h4>
                <button type="button" className="btn" data-dismiss="modal">
                  <i className="fa fa-close fa-fw"></i> Cerrar
                </button>
                <button type="button" className="btn" id="btnConfirm">
                  <i className="fa fa-check fa-fw"></i> Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="dSuccess"
          modal-render="true"
          tabIndex="-1"
          role="dialog"
          className="modal fade dSuccess error-dialog in"
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content background-modal">
              <div className="modal-header dialog-header-error ng-scope">
                <h4 className="modal-title">Confirmado!</h4>
              </div>
              <div className="modal-body">
                <span className="sConfirmed">
                  Tus sesiones han sido confirmadas. Te esperamos!
                </span>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-pink"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Riders;
