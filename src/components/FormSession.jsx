import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";

function FormSession(session = undefined) {
  const data_session = session.session;
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const url = "http://localhost:3001/api/sessions/";

  const resetForm = () => {
    let form = document.getElementById("form-session");
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
  };

  const CreateSession = async data => {
    data.main = false;
    await axios
      .post(url, data)
      .then(response => {
        setIsSuccess("Session creada correctamente.");
        resetForm();
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const UpdateSession = async data => {
    await axios
      .put(url + data_session._id, data)
      .then(response => {
        setIsSuccess("Session actualizada correctamente.");
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const onSubmit = data => {
    setIsError(false);
    setIsLoading(true);
    if (data_session) {
      UpdateSession(data);
    } else {
      CreateSession(data);
    }
    setIsLoading(false);
  };

  if (isError) {
    return <h1>Error....</h1>;
  }
  return (
    <div className="card-block">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h5 className="text-success">{isSuccess}</h5>
        </div>
        <br />
      </div>
      <form
        className="form-material"
        onSubmit={handleSubmit(onSubmit)}
        id="form-session"
      >
        <div className="row">
          <div className="col-lg-2">
            <div className="form-group form-default">
              <input
                name="number"
                defaultValue={data_session && data_session.number}
                type="text"
                className="form-control fill"
                ref={register({ required: true })}
              />
              <span className="form-bar"></span>
              <label className="float-label">Sesiones</label>
            </div>
            {errors.number && (
              <b className="label color-danger">Campo obligatorio</b>
            )}
          </div>
          <div className="col-lg-6">
            <div className="form-group form-default">
              <input
                type="text"
                defaultValue={data_session && data_session.name}
                className="form-control fill"
                name="name"
                ref={register({ required: true })}
              />
              <span className="form-bar"></span>
              <label className="float-label">Nombre</label>
            </div>
            {errors.name && (
              <b className="label color-danger">Campo obligatorio</b>
            )}
          </div>
          <div className="col-lg-2">
            <div className="form-group form-default">
              <input
                name="price"
                type="text"
                defaultValue={data_session && data_session.price}
                className="form-control fill"
                ref={register({ required: true })}
              />
              <span className="form-bar"></span>
              <label className="float-label">Precio</label>
            </div>
            {errors.price && (
              <b className="label color-danger">Campo obligatorio</b>
            )}
          </div>
          <div className="col-lg-2">
            <div className="form-group form-default">
              <input
                name="extra_weekend"
                type="text"
                defaultValue={data_session && data_session.extra_weekend}
                className="form-control fill"
                ref={register({ required: true })}
              />
              <span className="form-bar"></span>
              <label className="float-label">Extra Weekend</label>
            </div>
            {errors.extra_weekend && (
              <b className="label color-danger">Campo obligatorio</b>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <button
              className="btn btn-success btn-round right"
              type="submit"
              disabled={isLoading}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSession;
