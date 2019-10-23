import React, { useState, createRef } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Principal = () => {
  const [file, setFile] = useState(null);
  const [editorState, seteditorState] = useState(EditorState.createEmpty());

  const handleChange = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const onEditorStateChange = e => {
    seteditorState(e);
    console.log("change");
    console.log(e);
  };

  const cropper = createRef(null);

  const width_image = { height: 400, width: "100%" };
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5>Principal</h5>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card-block">
                      <form className="form-material">
                        <div className="form-group form-default">
                          <input
                            type="text"
                            name="footer-email"
                            className="form-control fill"
                            required=""
                          />
                          <span className="form-bar"></span>
                          <label className="float-label">
                            Título sección 1
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <input
                          type="file"
                          name="files"
                          onChange={handleChange}
                        />
                        <Cropper
                          ref={cropper}
                          src={file}
                          style={width_image}
                          // Cropper.js options
                          aspectRatio={16 / 9}
                          guides={false}
                          //crop={this._crop.bind(this)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
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
            <br />
            <div className="row">
              <div className="col-lg-12 text-center">
                <button
                  className="btn btn-primary btn-round right"
                  type="submit"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Principal;
