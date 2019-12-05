import React from "react";
import { Link } from "react-router-dom";
import imgProfile from "../assets/images/imgProfile.png";

let token = window.sessionStorage.getItem("token");
var isAuth = false;
if (token) {
  isAuth = true;
}
const Navbar = () => {
  return (
    <div className="nav-container">
      {isAuth && (
        <div className="boxUser hidden-xs">
          <span className="name">Julio Aguado</span>
          <span className="image">
            <img src={imgProfile} className="img-circle" />
          </span>
        </div>
      )}
      <nav className="absolute renton">
        <div className="nav-bar">
          <div className="module left">
            <i className="rentonGraphics logotypeMinWhite"></i>
          </div>
          <div className="module center">
            <ul className="menu">
              <li>
                <Link to="./" id="link_home">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="./riders">Cablepark</Link>
              </li>
              <li>
                <Link to="./school">Escuelita</Link>
              </li>
              <li>
                <Link to="./features">Features</Link>
              </li>
              <li>
                <Link to="./bar">Pez volador</Link>
              </li>
              <li>
                <Link to="./complex">Cabañas y Hostel</Link>
              </li>
              <li>
                <Link to="./camp">Camp & Grill</Link>
              </li>
              <li>
                <Link to="./contact">Contacto</Link>
              </li>
              {isAuth ? (
                <li>
                  <a href="#" id="sign_up">
                    Cerrar Sesión
                  </a>
                </li>
              ) : (
                <React.Fragment>
                  <li>
                    <Link to="./login">Iniciar sesión</Link>
                  </li>
                  <li>
                    <Link to="./admin">Admin</Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
          <div className="module right">
            <a
              href="https://es-es.facebook.com/rentonwc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/renton_wakeboardingcomplex/"
              target="_blank"
              rel="noopener noreferrer"
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
            <Link to="./">Inicio</Link>
          </li>
          <li>
            <Link to="./riders">Cablepark</Link>
          </li>
          <li>
            <Link to="./school">Escuelita</Link>
          </li>
          <li>
            <Link to="./features">Features</Link>
          </li>
          <li>
            <Link to="./bar">Pez volador</Link>
          </li>
          <li>
            <Link to="./complex">Cabañas y camping</Link>
          </li>
          <li>
            <Link to="./contact">Contacto</Link>
          </li>
          {isAuth ? (
            <a href="#" id="sign_up">
              Cerrar Sesión
            </a>
          ) : (
            <React.Fragment>
              <li>
                <Link to="./login">Iniciar sesión</Link>
              </li>
              <li>
                <Link to="./admin">Admin</Link>
              </li>
            </React.Fragment>
          )}
        </ul>
        <hr />
        <div className="row">
          <div className="col-xs-12 text-center">
            <i className="rentonGraphics logotypeMinWhite"></i>
          </div>
          <div className="col-xs-12 text-center">
            <span className="txtCopyright">
              Renton Wakeboarding Complex - 2019 Todos los Derechos Reservados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
