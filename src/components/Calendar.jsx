import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const full_name = window.sessionStorage.getItem("full_name");
const user_id = window.sessionStorage.getItem("id");

function Calendar() {
  const [main_session, setMainSession] = useState("");
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
      <section id="sectionCalendar" className="sectionCalendar">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <input type="hidden" id="vType" name="vType" value="1"></input>
              <input
                type="hidden"
                id="idUser"
                name="idUser"
                value={user_id}
              ></input>
              <input
                type="hidden"
                id="vUser"
                name="vUser"
                value={full_name}
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
                  <span className="hashRight">//////////////////////////</span>
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
    </React.Fragment>
  );
}

export default Calendar;
