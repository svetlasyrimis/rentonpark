import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Slider from "../components/Slider";
import Section from "../components/Section";
import FormContact from "../components/FormContact";

const School = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataBackground, setIsDataBackground] = useState(undefined);
  const [isDataSections, setIsDataSections] = useState(undefined);
  const [isLoadingSection, setIsLoadingSection] = useState(true);

  const fetchDataBackground = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/images_type/escuelita")
      .then(res => {
        setIsDataBackground(res.data);
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
      .get("http://localhost:3001/api/sections_type/escuelita")
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
    fetchDataBackground();
    fetchDataSections();
  }, []);

  if (isLoading || isLoadingSection) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="main-container viewSchool">
      <section className="cover parallax">
        <div
          id="carouselExampleIndicators"
          className="carousel slide background-image-holder"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {isDataBackground.map((background, index) => (
              <Slider
                index={index}
                data={background}
                key={index}
                title="Escuelita"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="brand transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3 className="fontLemonMilk mb0 p32 p0-xs">
                APRENDE CON LOS <span className="colorSkin">MEJORES</span>
              </h3>
              <h2 className="fontTide">Renton</h2>
            </div>
          </div>
        </div>
      </section>
      {isDataSections.map((section, index) => (
        <Section data={section} key={index} title="" />
      ))}

      <FormContact type={"escuelita"} />
    </div>
  );
};

export default School;
