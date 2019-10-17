import React from "react";
import Slider1 from "../images/slider1.jpeg";
import Slider2 from "../images/slider2.jpeg";
import Slider3 from "../images/slider3.jpeg";
import Logo from "../images/renton_light.png";
import "bootstrap/js/src/carousel";

const Home = () => {
  return (
    <div className="main-container viewMain">
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
                src={Slider1}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={Slider2}
                alt="Second slide"
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
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={Slider3}
                alt="Second slide"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section className="brand transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3 className="fontLemonMilk mb0 p32 p0-xs">
                WAKEBOARDING <span className="colorSkin">COMPLEX</span>
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
              alt="Background"
              className="background-image"
              src="./image/view/PR000_10001_C"
            ></img>
          </div>
        </div>
        <div className="col-md-6 content right">
          <h3 className="fontLemonMilk">RENTON WAKEBOARDING COMPLEX </h3>
          <hr />
          <p className="mb0"></p>
          <p>EL PARAÍSO EN LA COSTANERA</p>
          <p>
            RWC es un verdadero skatepark en el agua, apto para todos los
            niveles, que se puede disfrutar todos los días del año. Acercate y
            enterate de todo lo que tenemos para vos, cabañas, servicio de
            gastronomía, miniramp, camping, escuelita de wakeboard y muchas
            cosas más !!
          </p>{" "}
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default Home;
