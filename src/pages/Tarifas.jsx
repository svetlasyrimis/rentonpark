import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import CardTarifa from "../components/CardTarifa";

const Tarifas = () => {
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isInitError, setInitError] = useState(false);
  const [tariffs, setTariffs] = useState([]);

  const fetchData = async () => {
    setInitError(false);
    await axios
      .get("http://localhost:3001/api/tariffs")
      .then(res => {
        setTariffs(res.data);
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
      {tariffs.map(tariff => (
        <CardTarifa tariff={tariff} key={tariff._id} />
      ))}
    </div>
  );
};

export default Tarifas;
