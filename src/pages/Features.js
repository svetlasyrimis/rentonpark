import React from "react";
import Background from "../images/background_school.jpeg";
import Logo from "../images/renton_light.png";

const Features = () => {
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
                    <h1 className="fontTide">Features</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3 className="fontLemonMilk mb0 p32 p0-xs">
                VENI A PEGARLE A{" "}
                <span className="colorSkin">NUESTROS MODULOS</span>
              </h3>
              <h2 className="fontTide">Renton</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="image-square">
        <div className="col-md-6 image">
          <div className="background-image-holder fadeIn">
            <img
              alt="image"
              className="background-image"
              src="./image/view/MU000_100069"
            ></img>
          </div>
        </div>
        <div className="col-md-6 content right">
          <h3 className="fontLemonMilk">SMALL KICKER </h3>
          <hr />
          <p className="mb0"></p>
          <p>
            Este es nuestro kicker más chico y es ideal para principiantes que
            se animen a sentir las primeras sensaciones de pasar una rampa
            andando o de saltar. También es muy entretenido para los más
            experimentados para transfear a donde sea que este puesto en nuestro
            parque !
          </p>{" "}
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Features;
