import React, { useState } from "react";

const Backgrounds = () => {
  const [file, setFile] = useState(null);

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const width_image = { maxWidth: "80%" };
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h5>Backgrounds</h5>
        </div>
        <div className="card-block">
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sub-title">Home</div>
                  <input type="file" name="files" onChange={handleChange} />
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
                  <img className="img" style={width_image} src={file} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sub-title">Cablepark</div>
                  <input type="file" name="files" onChange={handleChange} />
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
                  <img className="img" style={width_image} src={file} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Backgrounds;
