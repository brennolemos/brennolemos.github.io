import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import logo from "../logo.svg";
import foto from "../foto.png";

const Header = () => {
  const [btnActive, setBtnActive] = useState("");

  const activeMenu = () => {
    btnActive === "" ? setBtnActive("active") : setBtnActive("");
  };

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
            <div
              onClick={activeMenu}
              className={"menu-mobile-btn " + btnActive}
            ></div>
            <ul className={"menu-mobile navbar-nav " + btnActive}>
              <li>
                <NavLink
                  className="menu__link"
                  exact
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu__link"
                  activeClassName="active"
                  to="/sobre"
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu__link"
                  activeClassName="active"
                  to="/portfolio"
                >
                  Portfólio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu__link"
                  activeClassName="active"
                  to="/contato"
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <header className="header d-md-block d-none">
        <nav className="sidenav col-md-3">
          <img src={foto} className="picture" alt="Breno Lemos" />
          <ul className="menu navbar-nav align-items-center">
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/sobre"
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/portfolio"
              >
                Portfólio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/contato"
              >
                Contato
              </NavLink>
            </li>
          </ul>

          <ul className="socials">
            <li className="mr-3">
              <a
                className="social"
                target="_blank"
                href="https://www.linkedin.com/in/brenolemos/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a
                className="social"
                target="_blank"
                href="https://github.com/brennolemos"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <img src={logo} className="logo" alt="Logo Breno Lemos" />
        </nav>
      </header>
    </>
  );
};

export default Header;
