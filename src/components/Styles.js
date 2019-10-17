import React from "react";
import "../styles/bootstrap.css";
import "../styles/bootstrap_theme.css";
import "../styles/jquery_ui.css";
import "../styles/nav_footer.css";
import "../styles/views.css";
import "../styles/custom.css";
import "../styles/elements.css";

const Styles = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default Styles;
