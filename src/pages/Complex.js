import React from "react";
import Background from "../images/complex.jpeg";
import Logo from "../images/renton_light.png";

function Bar() {
  return (
    <div className="main-container viewSchool">
      <section className="cover parallax">
        <div
          id="carouselExampleIndicators"
          className="carousel slide background-image-holder"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={Background}
                alt="First slide"
              ></img>
              <div className="centered">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                    <img
                      alt="RentonPark"
                      className="imageLogo mb8"
                      src={Logo}
                      draggable="false"
                    ></img>
                    <h1 className="fontTide">Complejo</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bar;
