import React from "react";
import HeaderCablePark from "../components/HeaderCablePark";
import Calendar from "../components/Calendar";
import "../assets/styles/riders.css";
import "../assets/styles/calendar.css";
import "../assets/styles/fPlugins/plugTables/tables.css";
import "../assets/styles/cropper.css";

function Riders() {
  return (
    <React.Fragment>
      <div className="main-container viewRiders">
        <HeaderCablePark />
        <Calendar />
      </div>
    </React.Fragment>
  );
}

export default Riders;
