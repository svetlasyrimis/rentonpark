import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Slider from "../components/Slider";

const Bar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataBackground, setIsDataBackground] = useState(undefined);

  const fetchDataBackground = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/images_type/bar")
      .then(res => {
        setIsDataBackground(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataBackground();
  }, []);

  if (isLoading) {
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
                title="Pez Volador"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bar;
