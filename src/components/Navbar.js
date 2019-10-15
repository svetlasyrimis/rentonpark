import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="absolute renton">
          <div className="nav-bar">
            <div className="module left">
              <i className="rentonGraphics logotypeMinWhite"></i>
            </div>
            <div className="module center">
              <ul className="menu">
                <li>
                  <a href="./">Inicio</a>
                </li>
                <li>
                  <a href="./riders">Cablepark</a>
                </li>
                <li>
                  <a href="./school">Escuelita</a>
                </li>
                <li>
                  <a href="./features">Features</a>
                </li>
                <li>
                  <a href="./bar">Pez volador</a>
                </li>
                <li>
                  <a href="./complex">Cabañas y camping</a>
                </li>
                <li>
                  <a href="./contact">Contacto</a>
                </li>
                <li>
                  <a href="./login">Iniciar sesión</a>
                </li>
              </ul>
            </div>
            <div className="module right">
              <a href="https://es-es.facebook.com/rentonwc/" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/renton_wakeboardingcomplex/"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <span id="mobileOpen" className="mobileMenu">
                <i className="fa fa-bars"></i>
              </span>
            </div>
          </div>
        </nav>
        <div id="mobileMenu" className="mMenu">
          <div className="row">
            <div className="col-xs-10"></div>
            <div className="col-xs-2 pull-right">
              <i className="fa fa-close btnClose" id="mobileClose"></i>
            </div>
          </div>
          <hr />
          <ul className="menu">
            <li>
              <a href="./">Inicio</a>
            </li>
            <li>
              <a href="./riders">Cablepark</a>
            </li>
            <li>
              <a href="./school">Escuelita</a>
            </li>
            <li>
              <a href="./features">Features</a>
            </li>
            <li>
              <a href="./bar">Pez volador</a>
            </li>
            <li>
              <a href="./complex">Cabañas y camping</a>
            </li>
            <li>
              <a href="./contact">Contacto</a>
            </li>
            <li>
              <a href="./login">Iniciar sesión</a>
            </li>
          </ul>
          <hr />
          <div className="row">
            <div className="col-xs-12 text-center">
              <i className="rentonGraphics logotypeMinWhite"></i>
            </div>
            <div className="col-xs-12 text-center">
              <span className="txtCopyright">
                Renton Wakeboarding Complex - 2017 Todos los Derechos Reservados
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
