import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import * as S from './styles';
import foto from '../foto.png';
import Switch from '../Switch/Switch';

interface Props {
  toggleTheme: () => void;
}

export default ({ toggleTheme }: Props) => {
  const [menuMobileIsActive, setMenuMobileIsActive] = useState(false);
  const { title } = useContext(ThemeContext);

  const toggleMenuMobile = () => setMenuMobileIsActive(!menuMobileIsActive);

  return (
    <>
      <S.Header>
        <nav className="sidenav-mobile d-flex flex-wrap justify-content-between align-items-center navbar navbar-expand-lg">
          <NavLink exact to="/">
            <div className="d-flex align-items-center">
              <img src={foto} className="picture" alt="Breno Lemos" />
              <h2 className="header__title">Breno Lemos</h2>
            </div>
          </NavLink>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav d-md-flex d-none mr-3">
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
            <Switch toggleTheme={toggleTheme} checked={title === 'dark'} />
          </div>
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
      </S.Header>
    </>
  );
};
