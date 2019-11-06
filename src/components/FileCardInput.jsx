import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Loader from "../components/Loader";

function FileCardInput({ name, width_image, type }) {
  const initial_crop = { unit: "%", width: 90, aspect: 16 / 9 };
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [crop, setCrop] = useState(initial_crop);

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      await axios
        .get("http://localhost:3001/api/images_type/" + type)
        .then(res => {
          let image_data = res.data[0];
          if (image_data) {
            let src = "/images/" + image_data.image.originalname;
            setFile(src);
            if (image_data.crop) {
              setCrop(image_data.crop);
            }
          }
        })
        .catch(error => {
          setIsError(error.response.data.message);
          setIsLoading(false);
        });

      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <div className="col-lg-6 text-center mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="sub-title">{name}</div>
          <input
            alt="background_image"
            type="file"
            name="files"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-12 text-center">
          <button
            className="btn btn-primary btn-round text-center"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-12 text-center">
          {file && (
            <ReactCrop
              src={file}
              crop={crop}
              ruleOfThirds
              onChange={onCropChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FileCardInput;
