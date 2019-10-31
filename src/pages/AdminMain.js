import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const AdminMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isData, setIsData] = useState(undefined);

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/messages")
      .then(res => {
        setIsData(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <React.Fragment>
      <div className="row">
        {isData.map((message, index) => (
          <div className="col-lg-4 col-md-12" key={index}>
            <div className="card o-hidden">
              <div className="card-footer">
                <h4>
                  {message.name} {message.lastname}
                </h4>
                <p className="text-muted m-b-5">{message.phone}</p>
                <p className="text-muted">{message.email}</p>
                <p className="text-muted text-center">Días de interés</p>
                <div className="row">
                  {message.days.map((day, index) => {
                    return (
                      <div className="col" key={index}>
                        <h6>{day}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AdminMain;
