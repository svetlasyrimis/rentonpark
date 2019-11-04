import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import SelectSession from "../components/SelectSession";

function FormConfigurationCablePark({ sessions, main_session }) {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    let url = "http://localhost:3001/api/update_main_session/" + data.session;
    await axios
      .post(url, {})
      .then(response => {
        setIsSuccess("Configuración actualizada correctamente");
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
    <div className="row">
      <div className="offset-4 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h5>Configuración CablePark</h5>
          </div>
          <div className="card-block">
            <form
              className="form-material"
              id="form-configuration"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h5 className="text-success">{isSuccess}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group form-default">
                    <SelectSession
                      data={sessions}
                      main_session={main_session}
                      register={register}
                    />
                  </div>
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
        </div>
      </div>
    </div>
  );
}

export default FormConfigurationCablePark;
