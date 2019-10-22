import React from "react";
import "../assets/styles_admin/dataTables.bootstrap4.min.css";

const Reservas = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Lista de reservas</h5>
            </div>
            <div className="card-block">
              <div className="dt-responsive table-responsive">
                <div className="row">
                  <div className="offset-10 col-xs-12 col-sm-12 col-md-2">
                    <div className="dataTables_filter">
                      <label>
                        Buscar:
                        <input
                          type="search"
                          className="form-control input-sm"
                          placeholder=""
                          aria-controls="order-table"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <table
                  id="order-table"
                  className="table table-striped table-bordered nowrap"
                >
                  <thead>
                    <tr>
                      <th>Rider</th>
                      <th>Producto</th>
                      <th>Monto</th>
                      <th>Estado</th>
                      <th>Fecha Registro</th>
                      <th>Mes</th>
                      <th>Día</th>
                      <th>Año</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reservas;
