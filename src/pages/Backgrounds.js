import React from "react";
import FIleCardInput from "../components/FileCardInput";

const Backgrounds = () => {
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
              name={"Cablepark"}
              width_image={width_image}
              type={"cablepark"}
            />
            <FIleCardInput
              name={"Features"}
              width_image={width_image}
              type={"features"}
            />
            <FIleCardInput
              name={"Escuelita"}
              width_image={width_image}
              type={"escuelita"}
            />
            <FIleCardInput
              name={"Pez Volador"}
              width_image={width_image}
              type={"pez_volador"}
            />
            <FIleCardInput
              name={"Cabañas y Hostel"}
              width_image={width_image}
              type={"complex"}
            />
            <FIleCardInput
              name={"Camp & Grill "}
              width_image={width_image}
              type={"camp"}
            />
            <FIleCardInput
              name={"Contacto"}
              width_image={width_image}
              type={"contact"}
            />
            <FIleCardInput
              name={"Login"}
              width_image={width_image}
              type={"login"}
            />
            <FIleCardInput
              name={"Register"}
              width_image={width_image}
              type={"register"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Backgrounds;
