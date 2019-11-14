import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import Loader from "../components/Loader";
import SelectRiders from "../components/SelectRiders";
import SelectSession from "../components/SelectSession";

const Packs = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [postError, setPostError] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [riders, setRiders] = useState([]);
  const [sessions, setSessions] = useState([]);

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/sessions")
      .then(res => {
        setSessions(res.data);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        isInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/users")
      .then(res => {
        setRiders(res.data);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        isInitLoading(false);
      });

    setIsInitLoading(false);
  };

  const onSubmit = data => {
    setPostError(false);
    setPostLoading(true);
    console.log(data);
    setPostLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isInitLoading) {
    return <Loader />;
  }

  if (isInitError || postError) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5>Asignar Packs</h5>
      </div>
      <div className="card-block">
        <form className="form-material" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-5">
              <div className="form-group form-default">
                <SelectRiders data={riders} register={register} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form-group form-default">
                <SelectSession
                  data={sessions}
                  main_session={""}
                  register={register}
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group form-default">
                <input
                  type="text"
                  name="quantity"
                  className="form-control fill"
                  ref={register({ required: true })}
                />
                <span className="form-bar"></span>
                <label className="float-label">Cantidad</label>
              </div>
              {errors.quantity && (
                <b className="label color-danger">Campo obligatorio</b>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <button
                className="btn btn-success btn-round right"
                type="submit"
                disabled={postLoading}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Packs;
