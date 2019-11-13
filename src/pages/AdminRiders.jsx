import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { onlyDate } from "../Helpers";

const useSearchRiders = riders => {
  const [query, setQuery] = useState("");
  const [filteredRider, setFilteredRider] = useState(riders);

  useMemo(() => {
    const result = riders.filter(rider => {
      return `${rider.name} ${rider.lastname}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredRider(result);
  }, [riders, query]);

  return { query, setQuery, filteredRider };
};

const AdminRiders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isData, setIsData] = useState([]);
  const { query, setQuery, filteredRider } = useSearchRiders(isData);

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/users")
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
              <h5>Lista de Riders</h5>
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
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Usuario</th>
                      <th>Prefijo</th>
                      <th>Teléfono</th>
                      <th>Fecha Creación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRider.map((rider, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {rider.name} {rider.lastname}
                          </td>
                          <td>{rider.email}</td>
                          <td>{rider.username}</td>
                          <td>{rider.phone_prefix}</td>
                          <td>{rider.phone}</td>
                          <td>{onlyDate(rider.createdAt)}</td>
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

export default AdminRiders;
