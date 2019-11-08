import React from "react";
import CardSectionFileEditor from "../components/CardSectionFileEditor";

const FeaturesNew = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5>Feature</h5>
            </div>
            <br />
            <CardSectionFileEditor
              title={"New Feature"}
              delete_button={false}
              type={"features"}
              new_section={true}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturesNew;
