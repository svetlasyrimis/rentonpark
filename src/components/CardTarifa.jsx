import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";

function CardTarifa({ tariff }) {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    await axios
      .put("http://localhost:3001/api/tariffs/" + tariff._id, data)
      .then(response => {
        setIsSuccess("Tarifa actualizada correctamente.");
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  if (isError) {
    return <h1>Error....</h1>;
  }
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-block text-center">
          <form
            className="form-material"
            id="form-tarifa"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
              <div className="col-lg-12 text-center">
                <h5 className="text-success">{isSuccess}</h5>
              </div>
            </div>
            <h4 className="m-t-20">
              <span className="text-c-green">$</span> {tariff.title}
            </h4>
            <div className="form-group form-default">
              <input
                type="text"
                name="price"
                className="form-control fill"
                defaultValue={tariff.price}
                ref={register({ required: true })}
              />
              <span className="form-bar"></span>
              <label className="float-label">Precio</label>
            </div>
            {errors.price && (
              <b className="label color-danger">Campo obligatorio</b>
            )}
            <button
              className="btn btn-success btn-sm btn-round"
              disabled={isLoading}
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardTarifa;
