import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { ljust } from "../Helpers";

const useSearchReservations = reservations => {
  const [query, setQuery] = useState("");
  const [filteredReservation, setFilteredReservation] = useState(reservations);

  React.useMemo(() => {
    const result = reservations.filter(reservation => {
      return `${reservation.name}`.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredReservation(result);
  }, [reservations, query]);

  return { query, setQuery, filteredReservation };
};

const Reservas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isData, setIsData] = useState([]);
  const { query, setQuery, filteredReservation } = useSearchReservations(
    isData
  );

  const format_date = date => {
    let new_date = new Date(date);
    let minutes = new_date.getMinutes().toString();
    let hour = new_date.getHours().toString();
    return ljust(hour, 2, "0") + ":" + ljust(minutes, 2, "0");
  };

  const only_date = date => {
    let new_date = new Date(date);
    let day = new_date.getDate().toString();
    let month = (new_date.getMonth() + 1).toString();
    let year = new_date.getFullYear();
    return ljust(day, 2, "0") + "-" + ljust(month, 2, "0") + "-" + year;
  };

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/reservations")
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
                          type="text"
                          className="form-control input-sm"
                          value={query}
                          onChange={e => {
                            setQuery(e.target.value);
                          }}
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
                    {filteredReservation.map((reservation, index) => {
                      return (
                        <tr key={index}>
                          <td>{reservation.name}</td>
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
