import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Reservas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isData, setIsData] = useState(undefined);

  const format_date = date => {
    let new_date = new Date(date);
    let minutes = new_date.getMinutes();
    let hour = new_date.getHours();
    return hour + ":" + minutes;
  };

  const only_date = date => {
    let new_date = new Date(date);
    let day = new_date.getDate();
    let month = new_date.getMonth() + 1;
    let year = new_date.getFullYear();
    return day + "-" + month + "-" + year;
  };

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/reservations")
      .then(res => {
        console.log(res.data);
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
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Lista de reservas</h5>
            </div>
            <div className="card-block">
              <div className="dt-responsive table-responsive">
                <div className="row">
                  <div className="offset-10 col-xs-12 col-sm-12 col-md-2">
                    <div className="dataTables_filter">
                      <label>
                        Buscar:
                        <input
                          type="search"
                          className="form-control input-sm"
                          placeholder=""
                          aria-controls="order-table"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <table
                  id="order-table"
                  className="table table-striped table-bordered nowrap"
                >
                  <thead>
                    <tr>
                      <th>Rider</th>
                      <th>Producto</th>
                      <th>Monto</th>
                      <th>Fecha</th>
                      <th>Hora Inicio</th>
                      <th>Hora Fin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isData.map((reservation, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {reservation.user.name} {reservation.user.lastname}
                          </td>
                          <td>{reservation.session.name}</td>
                          <td>{reservation.total}</td>
                          <td>{only_date(reservation.start)}</td>
                          <td>{format_date(reservation.start)}</td>
                          <td>{format_date(reservation.finish)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reservas;
