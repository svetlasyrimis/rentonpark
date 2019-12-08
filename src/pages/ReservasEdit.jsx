import React, { useState, useEffect } from "react";
import axios from "axios";
import FormReservation from "../components/FormReservation";
import Loader from "../components/Loader";

const ReservasEdit = props => {
  const reservation_id = props.match.params.id;
  const [isDataSessions, setIsDataSessions] = useState(undefined);
  const [isMainSession, setIsMainSession] = useState("");
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [reservation, setIsReservation] = useState(undefined);

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/reservations/" + reservation_id)
      .then(res => {
        setIsReservation(res.data);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        isInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/sessions")
      .then(res => {
        setIsDataSessions(res.data);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        setIsInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/main_session")
      .then(res => {
        setIsMainSession(res.data._id);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        setIsInitLoading(false);
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
    <FormReservation
      sessions={isDataSessions}
      main_session={isMainSession}
      reservation={reservation}
    />
  );
};

export default ReservasEdit;
