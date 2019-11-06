import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import DisplayCropImage from "../components/DisplayCropImage";

function FormSlider({ width_image, images }) {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [file, setFile] = useState(null);
  const [previewfile, setpreviewfile] = useState(null);
  const [isCrop, setCrop] = useState({
    unit: "%",
    width: 90,
    aspect: 16 / 9
  });

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setpreviewfile(event.target.files[0]);
  };

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    let formData = new FormData();
    formData.append("image", previewfile);
    formData.set("type", "slider");
    formData.set("crop", JSON.stringify(isCrop));
    let input = document.getElementById("input_image");
    await axios
      .post("http://localhost:3001/api/images", formData)
      .then(response => {
        setIsSuccess("Imágen guardada correctamente.");
        setFile(null);
        input.value = "";
        images.push(response.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  if (isError) {
    return <h1>Error....</h1>;
  }
  return (
    <React.Fragment>
      <form id="form-sliders" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="sub-title">Agregar Nuevo</div>
            <input
              type="file"
              name="image"
              id="input_image"
              onChange={handleChange}
              ref={register}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12 text-center">
            <h5 className="text-success">{isSuccess}</h5>
          </div>
          <br />
          <br />
          <br />
          <div className="col-lg-12 text-center">
            <div className="row">
              <div className="offset-2 col-lg-10 text-center">
                {file && (
                  <ReactCrop
                    src={file}
                    crop={isCrop}
                    ruleOfThirds
                    onChange={onCropChange}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <button
              className="btn btn-primary btn-round text-center"
              type="submit"
              disabled={isLoading}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>

      <div className="row">
        {images.map((image, index) => (
          <DisplayCropImage
            image={image}
            key={index}
            width_image={width_image}
            index={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default FormSlider;
