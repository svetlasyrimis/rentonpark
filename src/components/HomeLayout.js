import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/nav_footer.css";
import "../assets/styles/views.css";
import "../assets/styles/custom.css";
import "../assets/styles/elements.css";
import "../assets/styles/fonts.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeLayout = props => {
  return (
    <React.Fragment>
      <div className="public-panel">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default HomeLayout;
