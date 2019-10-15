import React from "react";
import "../styles/bootstrap.css";
import "../styles/bootstrap_theme.css";
import "../styles/jquery_ui.css";
import "../styles/nav_footer.css";
import "../styles/views.css";
import "../styles/custom.css";
import "../styles/elements.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HomeLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default HomeLayout;
