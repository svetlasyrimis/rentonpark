import React from "react";

const AdminMain = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <div className="card o-hidden">
        <div className="card-footer">
          <h4>Alvaro Alexander Palacios Carrillo</h4>
          <p className="text-muted m-b-5">975012741</p>
          <p className="text-muted">apalacioscarrillo@gmail.com</p>
          <p className="text-muted text-center">Días de interés</p>
          <div className="row">
            <div className="col">
              <h6>Lunes</h6>
            </div>
            <div className="col">
              <h6>Miércoles</h6>
            </div>
            <div className="col">
              <h6>Viernes</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
