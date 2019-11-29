import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "../assets/images/background_riders.jpeg";
import "../assets/styles/riders.css";
import "../assets/styles/calendar.css";
import "../assets/styles/fPlugins/plugTables/tables.css";
import "../assets/styles/cropper.css";

function Riders() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="main-container viewRiders">
        <section className="image-bg overlay parallax">
          <div className="background-image-holder fadeIn">
            <img
              alt="renton"
              className="background-image"
              src={Background}
              draggable="false"
            />
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
                        <p>
                          Elige él o los turnos que quieras reservar mantener
                          presionado el turno para reservar si estás con el cel
                          y hace click en Confirmar Reserva. Una nueva ventana
                          aparecerá con la lista de turnos que reservaste.
                          Checkeá que este todo bien, dale click en Reservar y
                          listo ! Ya estas listo para venir a andar !
                        </p>
                        <p>
                          Si no vas a utilizar tu turno es obligatorio
                          cancelarlo al menos dos horas antes del mismo
                          ingresando nuevamente al calendario. En el caso de no
                          tener conexión a internet avisar telefónicamente al
                          3413671999. De no cancelar el turno el cable
                          inhabilitará al rider por tiempo indeterminado para
                          poder volver a realizar reservas.&nbsp;
                        </p>
                        <p>
                          <u>PRECIOS PACKS Y ABONOS</u> podés consultar toda la
                          info con el driver de turno y adquirir lo que
                          necesites en la caja
                        </p>
                        <p>
                          - <b>TURNO 20min: </b>$500.- LUN A VIE / $700.- FINDES
                          Y FERIADOS
                        </p>
                        <p>
                          -&nbsp;<b>PACK 5 SESIONES:</b> $2.000.- son
                          individuales y se pueden utilizar cualquier día de la
                          semana
                        </p>
                        <p>
                          - <b>ABONO TEMPORADA VERANO:</b> $15.000.- podés
                          reservar 1 turno por día de lunes a viernes / válido
                          del 1ro de Noviembre al 30 de Abril / se puede
                          adquirir hasta fin de Diciembre
                        </p>
                        <p>
                          - <b>ALQUILER DE EQUIPO:</b> Tabla $200.- / Chaleco
                          $100.- / Casco $100.-
                        </p>
                        <p>
                          -
                          <b>
                            INFO CLASES INDIVIDUALES O GRUPALES EN LA PESTAÑA
                            "ESCUELITA"&nbsp;
                          </b>
                        </p>
                        <p>
                          <br />
                        </p>
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
