import React, { useState, createRef } from "react";
import CardSectionFileEditor from "../components/CardSectionFileEditor";
import { EditorState } from "draft-js";
import "cropperjs/dist/cropper.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Escuelita = () => {
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
              <h5>Escuelita</h5>
            </div>
            <br />
            <CardSectionFileEditor
              title={"Título Sección 1"}
              handleChange={handleChange}
              width_image={width_image}
              cropper={cropper}
              file={file}
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Escuelita;
