import React from "react";
import { Editor } from "react-draft-wysiwyg";
import Cropper from "react-cropper";

function CardSectionFileEditor({
  handleChange,
  width_image,
  cropper,
  file,
  editorState,
  onEditorStateChange,
  title,
  delete_button
}) {
  const show_delete_button = delete_button ? {} : { display: "none" };
  return (
    <React.Fragment>
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
                    <label className="float-label">{title}</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <input type="file" name="files" onChange={handleChange} />
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
          <button className="btn btn-primary btn-round right" type="submit">
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
    </React.Fragment>
  );
}

export default CardSectionFileEditor;
