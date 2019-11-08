import React, { useState, useEffect } from "react";
import axios from "axios";
import FormSession from "../components/FormSession";
import Loader from "../components/Loader";

const SessionEdit = props => {
  const session_id = props.match.params.id;
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [session, setIsSession] = useState(undefined);

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/sessions/" + session_id)
      .then(res => {
        setIsSession(res.data);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        isInitLoading(false);
      });
    setIsInitLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isInitLoading) {
    return <Loader />;
  }

  if (isInitError) {
    return <h1>Error....</h1>;
  }
  return (
    <div className="card">
      <div className="card-header">
        <h5>Editar Sesión</h5>
      </div>
      <FormSession session={session} />
    </div>
  );
};

export default SessionEdit;
