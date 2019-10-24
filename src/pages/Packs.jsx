import React from "react";

const SessionNew = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Asignar Packs</h5>
      </div>
      <div className="card-block">
        <form className="form-material">
          <div className="row">
            <div className="col-lg-5">
              <div className="form-group form-default">
                <select
                  name="select"
                  className="form-control form-control-default"
                >
                  <option value="opt1">Seleccionar Rider</option>
                  <option value="opt2">Type 2</option>
                  <option value="opt3">Type 3</option>
                </select>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form-group form-default">
                <select
                  name="select"
                  className="form-control form-control-default"
                >
                  <option value="opt1">Seleccionar Producto</option>
                  <option value="opt2">Type 2</option>
                  <option value="opt3">Type 3</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Cantidad</label>
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
