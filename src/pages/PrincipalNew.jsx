import React from "react";
import CardSectionFileEditor from "../components/CardSectionFileEditor";

const PrincipalNew = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5>Principal</h5>
            </div>
            <br />
            <CardSectionFileEditor
              title={"New Principal"}
              delete_button={false}
              type={"principal"}
              new_section={true}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrincipalNew;
