import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import CardSectionFileEditor from "../components/CardSectionFileEditor";

const Escuelita = () => {
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [section, setIsSection] = useState(undefined);

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/sections_type/escuelita")
      .then(res => {
        setIsSection(res.data[0]);
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
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5>Escuelita</h5>
            </div>
            <br />
            <CardSectionFileEditor
              title={"Título Sección 1"}
              delete_button={false}
              type={"escuelita"}
              section={section}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Escuelita;
