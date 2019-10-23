import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
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

  const width_image = { maxWidth: "80%" };
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
                        <img className="img" style={width_image} src={file} />
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Principal;
