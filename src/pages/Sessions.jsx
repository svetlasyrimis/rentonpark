import React from "react";

const Sessions = () => {
  return (
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-block text-center">
          <i class="feather icon-file-text text-c-green d-block f-40"></i>
          <h4 class="m-t-20">
            <span class="text-c-green">$ 500</span> Sesión 20 minutos
          </h4>
          <p>Sesiones: 1</p>
          <p class="m-b-20">Extra Weekend: $ 200</p>
          <button class="btn btn-success btn-sm btn-round">Editar</button>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
