import React, { Component } from "react";
import Slider1 from "../images/slider1.jpeg";
import Slider2 from "../images/slider2.jpeg";
import Slider3 from "../images/slider3.jpeg";
import $ from "jquery";
import "bootstrap/js/src/carousel";
import Logo from "../images/renton_light.png";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div class="main-container viewMain">
          <section class="cover">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                  ></img>
                  <div class="centered">
                    <div class="row">
                      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                        <img
                          alt="RentonPark"
                          class="imageLogo mb8"
                          src={Logo}
                          draggable="false"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={Slider2}
                    alt="Second slide"
                  ></img>
                  <div class="centered">
                    <div class="row">
                      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                        <img
                          alt="RentonPark"
                          class="imageLogo mb8"
                          src={Logo}
                          draggable="false"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={Slider3}
                    alt="Second slide"
                  ></img>
                  <div class="centered">
                    <div class="row">
                      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                        <img
                          alt="RentonPark"
                          class="imageLogo mb8"
                          src={Logo}
                          draggable="false"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </section>
        </div>
        <section class="brand transparent">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h3 class="fontLemonMilk mb0 p32 p0-xs">
                  WAKEBOARDING <span class="colorSkin">COMPLEX</span>
                </h3>
                <h2 class="fontTide">Renton</h2>
              </div>
            </div>
          </div>
        </section>
        <section class="image-square">
          <div class="col-md-6 image">
            <div class="background-image-holder fadeIn">
              <img
                alt="image"
                class="background-image"
                src="./image/view/PR000_10001_C"
              ></img>
            </div>
          </div>
          <div class="col-md-6 content right">
            <h3 class="fontLemonMilk">RENTON WAKEBOARDING COMPLEX </h3>
            <hr />
            <p class="mb0"></p>
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
  }
}
