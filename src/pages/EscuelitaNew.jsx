import React from "react";
import CardSectionFileEditor from "../components/CardSectionFileEditor";

const EscuelitaNew = () => {
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
              title={"New Escuelita"}
              delete_button={false}
              type={"escuelita"}
              new_section={true}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EscuelitaNew;
