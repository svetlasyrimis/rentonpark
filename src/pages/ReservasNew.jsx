import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { EditorState, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FormReservation from "../components/FormReservation";
import FormConfigurationCablePark from "../components/FormConfigurationCablePark";
import FormReglamentoCablePark from "../components/FormReglamentoCablePark";

const ReservasNew = () => {
  const [editorState1, seteditorState1] = useState(EditorState.createEmpty());
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [isDataSessions, setIsDataSessions] = useState(undefined);
  const [isMainSession, setIsMainSession] = useState("");
  const [isReglamento, setIsReglamento] = useState("");

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/sessions")
      .then(res => {
        setIsDataSessions(res.data);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        isInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/sections_type/reglamento_cablepark")
      .then(res => {
        setIsReglamento(res.data[0]._id);
        let content = res.data[0].description;
        seteditorState1(content);
      })
      .catch(error => {
        isInitError(error.response.data.message);
        isInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/main_session")
      .then(res => {
        setIsMainSession(res.data._id);
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
    <React.Fragment>
      <FormReservation sessions={isDataSessions} main_session={isMainSession} />
      <br />
      <FormConfigurationCablePark
        sessions={isDataSessions}
        main_session={isMainSession}
      />
      <br />
      <FormReglamentoCablePark body={editorState1} reglamento={isReglamento} />
    </React.Fragment>
  );
};

export default ReservasNew;
