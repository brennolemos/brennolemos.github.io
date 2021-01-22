import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import logo from '../logo.svg';
import foto from '../foto.png';

const Header = () => {
  const [menuMobileIsActive, setMenuMobileIsActive] = useState(false);

  const toggleMenuMobile = () => setMenuMobileIsActive(!menuMobileIsActive);

  return (
    <>
      <header className="header-mobile">
        <nav className="sidenav-mobile d-flex flex-wrap justify-content-between align-items-center navbar navbar-expand-lg">
          <div className="d-flex align-items-center">
            <img src={foto} className="picture" alt="Breno Lemos" />
            <h2 className="header__title">Breno Lemos</h2>
          </div>

          <ul className="navbar-nav d-md-flex d-none">
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
          <div className="d-md-none d-block menu-mobile-container position-relative">
            <div
              onClick={toggleMenuMobile}
              className={`menu-mobile-btn ${
                (menuMobileIsActive && 'active') || ''
              }`}
            ></div>
            <ul
              className={`menu-mobile navbar-nav ${
                (menuMobileIsActive && 'active') || ''
              }`}
            >
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

      {/* <header className="header d-md-block d-none">
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
      </header> */}
    </>
  );
};

export default Header;
