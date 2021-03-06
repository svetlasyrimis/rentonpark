import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useForm from "react-hook-form";
import axios from "axios";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ContentToHtml } from "../Helpers";

function CardSectionFileEditor({
  new_section = false,
  section,
  title,
  delete_button,
  type
}) {
  const show_delete_button = delete_button ? {} : { display: "none" };
  var content = EditorState.createEmpty();
  if (section && section.description) {
    content = ContentToHtml(section.description);
  }
  const { register, handleSubmit, errors } = useForm();
  const [file, setFile] = useState(null);
  const [editorState, seteditorState] = useState(content);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [isCrop, setCrop] = useState({ unit: "%", width: 90, aspect: 16 / 9 });
  const url = "http://localhost:3001/api/sections/";

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const onEditorStateChange = e => {
    seteditorState(e);
  };

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const resetForm = () => {
    let form = document.getElementById("form-section");
    form[0].value = "";
    form[1].value = "";
    setFile(null);
    setImage(null);
    seteditorState(EditorState.createEmpty());
  };

  const UpdateSection = async formData => {
    await axios
      .put(url + section._id, formData)
      .then(response => {
        setIsSuccess("Sección actualizada correctamente.");
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const CreateSection = async formData => {
    await axios
      .post(url, formData)
      .then(response => {
        setIsSuccess("Sección creada correctamente.");
        resetForm();
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const onSubmit = data => {
    setIsError(false);
    setIsLoading(true);
    let description = convertToRaw(editorState.getCurrentContent());
    let formData = new FormData();
    formData.set("title", data.title);
    formData.set("type", type);
    formData.set("description", JSON.stringify(description));
    if (image) {
      formData.append("image", image);
    }
    formData.set("crop", JSON.stringify(isCrop));
    if (new_section) {
      CreateSection(formData);
    } else {
      UpdateSection(formData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (section && section.image) {
      let src = "/images/" + section.image.originalname;
      setFile(src);
      if (section.crop) {
        setCrop(section.crop);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return <h1>{isError}</h1>;
  }
  return (
    <React.Fragment>
      <form
        className="form-material"
        onSubmit={handleSubmit(onSubmit)}
        id="form-section"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-block">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h5 className="text-success">{isSuccess}</h5>
                    </div>
                    <br />
                  </div>

                  <div className="form-group form-default">
                    <input
                      type="text"
                      name="title"
                      defaultValue={section && section.title}
                      className="form-control fill"
                      ref={register({ required: true })}
                    />
                    <span className="form-bar"></span>
                    <label className="float-label">{title}</label>
                  </div>
                  {errors.title && (
                    <b className="label color-danger">Campo obligatorio</b>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <input type="file" name="files" onChange={handleChange} />
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
            </div>
          </div>

          <div className="col-lg-6">
            <Editor
              name="description"
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
              localization={{
                locale: "es"
              }}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12 text-center">
            <button
              className="btn btn-primary btn-round right"
              type="submit"
              disabled={isLoading}
            >
              Guardar
            </button>
            <button
              className="btn btn-danger btn-round right"
              type="submit"
              style={show_delete_button}
            >
              Eliminar
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default CardSectionFileEditor;
