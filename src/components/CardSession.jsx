import React from "react";

function CardSession({ session }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-block text-center">
          <i className="feather icon-file-text text-c-green d-block f-40"></i>
          <h4 className="m-t-20">
            <span className="text-c-green">$ {session.price}</span>{" "}
            {session.name}
          </h4>
          <p>Sesiones: {session.number}</p>
          <p className="m-b-20">Extra Weekend: $ {session.extra_weekend}</p>
          <button className="btn btn-success btn-sm btn-round">Editar</button>
        </div>
      </div>
    </div>
  );
}

export default CardSession;
