import React from "react";
import Logo from "../assets/images/renton_light.png";

function Slider({ index, data, title }) {
  let main_class = "";
  if (index === 0) {
    main_class = "carousel-item active";
  } else {
    main_class = "carousel-item";
  }
  return (
    <div className={main_class}>
      <img
        className="d-block w-100"
        src={"images/" + data.image.originalname}
        alt="slider_rentonpark"
      ></img>
      <div className="centered">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
            <img
              alt="renton_park_logo"
              className="imageLogo mb8"
              src={Logo}
              draggable="false"
            ></img>
            <h1 className="fontTide">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
