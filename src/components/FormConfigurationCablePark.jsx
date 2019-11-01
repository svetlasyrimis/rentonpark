import React from "react";
import SelectSession from "../components/SelectSession";

function FormConfigurationCablePark({ sessions, main_session }) {
  return (
    <div className="row">
      <div className="offset-4 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h5>Configuración CablePark</h5>
          </div>
          <div className="card-block">
            <form className="form-material">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group form-default">
                    <SelectSession
                      data={sessions}
                      main_session={main_session}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <button
                    className="btn btn-success btn-round right"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormConfigurationCablePark;
