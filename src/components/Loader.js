import React from "react";
import "../assets/styles/Loader.css";

function Loader() {
  return (
    <div className="row text-center center-loader">
      <div className="col-lg-12">
        <div className="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default Loader;
