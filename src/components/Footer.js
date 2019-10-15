import React from "react";

class Footer extends React.Component {
  render() {
    var current_url = window.location.href;
    if (!current_url.includes("/register")) {
      return (
        <footer className="footer-2 text-center-xs">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <i className="rentonGraphics logotypeMinBlack"></i>
              </div>
              <div className="col-sm-12 text-center text-center-xs">
                <ul className="list-inline socialIcons social-list">
                  <li>
                    <a
                      href="https://es-es.facebook.com/rentonwc/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/renton_wakeboardingcomplex/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 text-center">
                <span className="txtCopyright">
                  Renton Wakeboarding Complex - 2019 Todos los Derechos
                  Reservados
                </span>
              </div>
            </div>
          </div>
        </footer>
      );
    } else {
      return "";
    }
  }
}

export default Footer;
