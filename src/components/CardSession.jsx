import React from "react";

function CardSession({ session }) {
  return (
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-block text-center">
          <i class="feather icon-file-text text-c-green d-block f-40"></i>
          <h4 class="m-t-20">
            <span class="text-c-green">$ {session.price}</span> {session.name}
          </h4>
          <p>Sesiones: {session.number}</p>
          <p class="m-b-20">Extra Weekend: $ {session.extra_weekend}</p>
          <button class="btn btn-success btn-sm btn-round">Editar</button>
        </div>
      </div>
    </div>
  );
}

export default CardSession;
