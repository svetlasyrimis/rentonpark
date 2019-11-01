import React, { useState } from "react";
import useForm from "react-hook-form";
import SelectSession from "../components/SelectSession";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function FormReservation({ sessions, main_session }) {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = e => {
    seteditorState(e);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h5>Nueva Reserva</h5>
      </div>
      <div className="card-block">
        <form className="form-material">
          <div className="row">
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input className="form-control fill" type="datetime-local" />
                <span className="form-bar"></span>
                <label className="float-label">Fecha/Hora Comienzo</label>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input className="form-control fill" type="datetime-local" />
                <span className="form-bar"></span>
                <label className="float-label">Fecha/Hora Fin</label>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Nombre</label>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input type="text" className="form-control fill" />
                <span className="form-bar"></span>
                <label className="float-label">Título</label>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="offset-3 col-lg-6">
              <div className="form-group form-default">
                <SelectSession data={sessions} main_session={main_session} />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <Editor
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
          <div className="row">
            <div className="col-lg-12 text-center">
              <button className="btn btn-success btn-round right" type="submit">
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
