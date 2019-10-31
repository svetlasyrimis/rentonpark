import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Section from "../components/Section";
import Loader from "../components/Loader";
import "bootstrap/js/src/carousel";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataSliders, setIsDataSliders] = useState(undefined);
  const [isDataSections, setIsDataSections] = useState(undefined);
  const [isLoadingSection, setIsLoadingSection] = useState(true);

  const fetchDataSliders = async () => {
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

  const fetchDataSections = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/sections_type/principal")
      .then(res => {
        setIsDataSections(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoadingSection(false);
      });
    setIsLoadingSection(false);
  };

  useEffect(() => {
    fetchDataSliders();
    fetchDataSections();
  }, []);

  if (isLoading || isLoadingSection) {
    return <Loader />;
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
      {isDataSections.map((section, index) => (
        <Section data={section} key={index} />
      ))}
    </div>
  );
};

export default Home;
