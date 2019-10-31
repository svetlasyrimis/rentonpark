import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import "bootstrap/js/src/carousel";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataSliders, setIsDataSliders] = useState(undefined);

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/images_type/slider")
      .then(res => {
        setIsDataSliders(res.data);
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
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="main-container viewMain">
      <section className="cover parallax">
        <div
          id="carouselExampleIndicators"
          className="carousel slide background-image-holder"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {isDataSliders.map((slider, index) => (
              <Slider index={index} data={slider} key={index} />
            ))}
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
