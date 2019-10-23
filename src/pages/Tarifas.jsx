import React from "react";
import CardTarifa from "../components/CardTarifa";

const Tarifas = () => {
  return (
    <div className="row">
      <CardTarifa title={"Chaleco"} price={"50"} />
      <CardTarifa title={"Casco"} price={"50"} />
      <CardTarifa title={"Tabla + Botas"} price={"150"} />
      <CardTarifa title={"Día"} price={"0"} />
      <CardTarifa title={"Week"} price={"0"} />
      <CardTarifa title={"Mes"} price={"0"} />
    </div>
  );
};

export default Tarifas;
