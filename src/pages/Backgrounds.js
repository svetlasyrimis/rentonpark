import React, { useState } from "react";
import FIleCardInput from "../components/FileCardInput";
const Backgrounds = () => {
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file8, setFile8] = useState(null);

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange1 = event => {
    setFile1(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange2 = event => {
    setFile2(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange3 = event => {
    setFile3(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange4 = event => {
    setFile4(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange5 = event => {
    setFile5(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange6 = event => {
    setFile6(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange7 = event => {
    setFile7(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange8 = event => {
    setFile8(URL.createObjectURL(event.target.files[0]));
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
            <FIleCardInput
              name={"Home"}
              handleChange={handleChange}
              width_image={width_image}
              file={file}
            />
            <FIleCardInput
              name={"Cablepark"}
              handleChange={handleChange1}
              width_image={width_image}
              file={file1}
            />
            <FIleCardInput
              name={"Escuelita"}
              handleChange={handleChange2}
              width_image={width_image}
              file={file2}
            />
            <FIleCardInput
              name={"Pez Volador"}
              handleChange={handleChange3}
              width_image={width_image}
              file={file3}
            />
            <FIleCardInput
              name={"Cabañas y Hostel"}
              handleChange={handleChange4}
              width_image={width_image}
              file={file4}
            />
            <FIleCardInput
              name={"Camp & Grill "}
              handleChange={handleChange5}
              width_image={width_image}
              file={file5}
            />
            <FIleCardInput
              name={"Contacto"}
              handleChange={handleChange6}
              width_image={width_image}
              file={file6}
            />
            <FIleCardInput
              name={"Login"}
              handleChange={handleChange7}
              width_image={width_image}
              file={file7}
            />
            <FIleCardInput
              name={"Register"}
              handleChange={handleChange8}
              width_image={width_image}
              file={file8}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Backgrounds;
