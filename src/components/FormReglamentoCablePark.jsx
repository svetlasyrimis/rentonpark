import React, { useState } from "react";
import axios from "axios";
import useForm from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentToHtml } from "../Helpers";

function FormReservation({ body, reglamento }) {
  var content;
  if (body) {
    content = ContentToHtml(body);
  } else {
    content = EditorState.createEmpty();
  }
  const { handleSubmit } = useForm();
  const [editorState, seteditorState] = useState(content);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");

  const onEditorStateChange = e => {
    seteditorState(e);
    console.log(e);
  };

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    let description = convertToRaw(editorState.getCurrentContent());
    data.description = JSON.stringify(description);
    data.type = "reglamento_cablepark";
    let url = "http://localhost:3001/api/sections/" + reglamento;
    await axios
      .put(url, data)
      .then(response => {
        setIsSuccess("Reglamento actualizado correctamente.");
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  if (isError) {
    return <h1>{isError}</h1>;
  }
  return (
    <div className="card">
      <div className="card-header">
        <h5>Reglamento</h5>
      </div>
      <div className="card-block">
        <form
          className="form-material"
          id="form-reglamento"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="text-success">{isSuccess}</h5>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="editer-content"
                onEditorStateChange={onEditorStateChange}
                localization={{
                  locale: "es"
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <button
                className="btn btn-success btn-round right"
                type="submit"
                disabled={isLoading}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormReservation;
