import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

const ReservasNew = () => {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const [editorState1, seteditorState1] = useState(EditorState.createEmpty());

  const onEditorStateChange = e => {
    seteditorState(e);
    console.log("change");
    console.log(e);
  };

  const onEditorStateChange1 = e => {
    seteditorState1(e);
    console.log("change");
    console.log(e);
  };

  return (
    <React.Fragment>
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
                <button
                  className="btn btn-success btn-round right"
                  type="submit"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="offset-4 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5>Configuración CablePark</h5>
            </div>
            <div className="card-block">
              <form className="form-material">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group form-default">
                      <select
                        name="select"
                        className="form-control form-control-default"
                      >
                        <option value="opt1">Seleccionar Producto</option>
                        <option value="opt2">Type 2</option>
                        <option value="opt3">Type 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <button
                      className="btn btn-success btn-round right"
                      type="submit"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="card">
        <div className="card-header">
          <h5>Descripción</h5>
        </div>
        <div className="card-block">
          <div className="row">
            <div className="col-lg-12">
              <Editor
                editorState={editorState1}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange1}
                localization={{
                  locale: "es"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservasNew;
