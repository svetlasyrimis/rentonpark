import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCrop from "react-image-crop";
import useForm from "react-hook-form";
import "react-image-crop/dist/ReactCrop.css";
import Loader from "../components/Loader";

function FileCardInput({ name, width_image, type }) {
  const { register, handleSubmit } = useForm();
  const initial_crop = { unit: "%", width: 90, aspect: 16 / 9 };
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState("");
  const [crop, setCrop] = useState(initial_crop);
  const [image_id, setImageId] = useState(null);
  const [file_image, setImageFile] = useState(null);

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setImageFile(event.target.files[0]);
  };

  const onSubmit = async data => {
    let crop_data = JSON.stringify(crop);
    if (data.image.length > 0) {
      let formData = new FormData();
      formData.append("image", file_image);
      formData.set("type", type);
      formData.set("crop", crop_data);
      data = formData;
    } else {
      delete data.image;
      data.crop = crop_data;
      data.type = type;
    }
    let input = document.getElementById("input_" + type);
    await axios
      .put("http://localhost:3001/api/images/" + image_id, data)
      .then(response => {
        setSuccess("Imágen actualizada correctamente.");
        input.value = "";
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      await axios
        .get("http://localhost:3001/api/images_type/" + type)
        .then(res => {
          let image_data = res.data[0];
          if (image_data) {
            setImageId(image_data._id);
            if (image_data.image) {
              let src = "/images/" + image_data.image.originalname;
              setFile(src);
            }
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
    return <h1>{isError}</h1>;
  }

  return (
    <div className="col-lg-6 text-center mt-5">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h5 className="text-success">{success}</h5>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="sub-title">{name}</div>
            <input
              alt="background_image"
              type="file"
              name="image"
              id={"input_" + type}
              onChange={handleChange}
              ref={register}
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
      </form>
    </div>
  );
}

export default FileCardInput;
