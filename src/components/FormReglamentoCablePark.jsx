import React, { useState } from "react";
import useForm from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function FormReservation({ body }) {
  const [editorState, seteditorState] = useState(body);

  const onEditorStateChange = e => {
    seteditorState(e);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h5>Reglamento</h5>
      </div>
      <div className="card-block">
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
      </div>
    </div>
  );
}

export default FormReservation;
