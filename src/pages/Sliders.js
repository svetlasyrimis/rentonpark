import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import FormSlider from "../components/FormSlider";
import DisplayCropImage from "../components/DisplayCropImage";
import "react-image-crop/dist/ReactCrop.css";

const Sliders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isImages, setIsImages] = useState([]);
  const width_image = { maxWidth: "80%" };

  const fetchData = async () => {
    setIsError(false);
    await axios
      .get("http://localhost:3001/api/images_type/slider")
      .then(res => {
        setIsImages(res.data);
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
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h5>Sliders</h5>
        </div>
        <div className="card-block">
          <FormSlider width_image={width_image} />
        </div>
        <div className="row">
          {isImages.map((image, index) => (
            <DisplayCropImage
              image={image}
              key={index}
              width_image={width_image}
              index={index}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sliders;
