import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

function FileCardInput({ name, width_image, type }) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState({});

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/images_type/" + type)
      .then(res => {
        setImage(res.data[0]);
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
    <div className="col-lg-6 text-center mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="sub-title">{name}</div>
          <input
            alt="background_image"
            type="file"
            name="files"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-12 text-center">
          <button
            className="btn btn-primary btn-round text-center"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-12 text-center">
          <img
            className="img"
            style={width_image}
            src={file}
            alt="renton_logo"
          />
        </div>
      </div>
    </div>
  );
}

export default FileCardInput;
