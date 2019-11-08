import React, { useEffect, useState } from "react";
import CardSession from "../components/CardSession";
import axios from "axios";
import Loader from "../components/Loader";

const Sessions = () => {
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [sessions, setIsSessions] = useState([]);

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/sessions")
      .then(res => {
        setIsSessions(res.data);
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
    <div className="row">
      {sessions.map(session => (
        <CardSession session={session} key={session._id} />
      ))}
    </div>
  );
};

export default Sessions;
