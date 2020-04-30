import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "./logo.svg";
import foto from "./foto.png";

const Header = () => {
  return (
    <>
      <header className="header-mobile d-md-none d-block col-md">
        <nav className="sidenav-mobile d-flex flex-wrap justify-content-between align-items-center">
          <ul className="redes-sociais d-flex">
            <li className="mr-3">
              <a target="_blank" href="https://www.linkedin.com/in/brenolemos/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://github.com/brennolemos">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>

          <div className="menu-mobile-container position-relative">
            <div className="menu-mobile">
              <div className="menu-mobile-btn"></div>
              <ul className="itens-paginas mobile navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfólio</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <header className="header d-md-block d-none">
        <nav className="side-nav col-md-3 col-12">
          <div className="fixed">
            <img src={foto} className="foto" alt="Breno Lemos" />

            <ul className="itens-paginas navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfólio</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
            <ul className="redes-sociais">
              <li className="mr-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/brenolemos/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/brennolemos">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
            <img src={logo} className="logo" alt="Logo Breno Lemos" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
