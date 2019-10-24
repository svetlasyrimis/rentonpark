import React from "react";

function CardTarifa({ title, price }) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-block text-center">
          <form className="form-material">
            <h4 className="m-t-20">
              <span className="text-c-green">$</span> {title}
            </h4>
            <div className="form-group form-default">
              <input type="text" className="form-control fill" value={price} />
              <span className="form-bar"></span>
              <label className="float-label">Precio</label>
            </div>
            <button className="btn btn-success btn-sm btn-round">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardTarifa;
