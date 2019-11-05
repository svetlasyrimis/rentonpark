import React, { useState, useEffect, useRef, useCallback } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";

function FormSlider({ width_image }) {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [file, setFile] = useState(null);
  const [previewfile, setpreviewfile] = useState(null);
  const cropper = useRef(null);

  const _crop = useCallback(() => {
    // console.log("Click happened");
    // console.log(cropper);
  }, []);

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
    await axios
      .post("http://localhost:3001/api/images", formData)
      .then(response => {
        setIsSuccess("Imágen guardada correctamente.");
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
    <form id="sliders" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="sub-title">Agregar Nuevo</div>
          <input
            type="file"
            name="image"
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
              <Cropper
                ref={cropper}
                src={file}
                style={width_image}
                aspectRatio={16 / 9}
                guides={false}
                crop={_crop(this)}
              />
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
  );
}

export default FormSlider;
