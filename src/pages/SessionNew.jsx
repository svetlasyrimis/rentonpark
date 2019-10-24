import React from "react";

const SessionNew = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Crear Sesión</h5>
      </div>
      <div className="card-block">
        <form className="form-material">
          <div className="row">
            <div className="col-lg-2">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Sesiones</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Nombre</label>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Precio</label>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Extra Weekend</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <button className="btn btn-success btn-round right" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionNew;
