import React from "react";

const AdminRiders = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Lista de Riders</h5>
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
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Usuario</th>
                      <th>Prefijo</th>
                      <th>Teléfono</th>
                      <th>Fecha Creación</th>
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

export default AdminRiders;
