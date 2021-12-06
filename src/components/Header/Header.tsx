import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

import * as S from "./Header-styles";
import foto from "../../assets/images/foto.png";
import BR from "../../assets/images/br.png";
import US from "../../assets/images/us.png";
import Switch from "../Switch/Switch";

interface Props {
  toggleTheme: () => void;
}

export default ({ toggleTheme }: Props) => {
  const [menuMobileIsActive, setMenuMobileIsActive] = React.useState(false);
  const { title } = React.useContext(ThemeContext);
  const { i18n } = useTranslation();

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuMobileIsActive(false);
  }, [pathname]);

  const toggleMenuMobile = () => setMenuMobileIsActive(!menuMobileIsActive);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <S.Header>
        <nav className="sidenav-mobile d-flex flex-wrap justify-content-between align-items-center navbar navbar-expand-md">
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
            <Switch toggleTheme={toggleTheme} checked={title === "dark"} />
            <div style={{ display: "flex", gap: 8, marginLeft: 32 }}>
              <img
                src={BR}
                style={{ maxWidth: 40, cursor: "pointer" }}
                onClick={() => changeLanguage("ptBR")}
                alt="pt-BR"
              />
              <img
                src={US}
                style={{ maxWidth: 40, cursor: "pointer" }}
                onClick={() => changeLanguage("en")}
                alt="us"
              />
            </div>
          </div>

          <div className="d-md-none d-block menu-mobile-container">
            <S.MenuBtn
              className={(menuMobileIsActive && "is-active") || ""}
              onClick={toggleMenuMobile}
            />

            <ul
              className={`menu-mobile navbar-nav ${
                (menuMobileIsActive && "active") || ""
              }`}
            >
              <li>
                <NavLink
                  className="menu__link"
                  exact
                  activeClassName="active"
                  to="/"
                >
                  <i className="fas fa-home d-inline-block mr-2"></i>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu__link"
                  activeClassName="active"
                  to="/sobre"
                >
                  <i className="fas fa-address-card d-inline-block mr-2"></i>
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu__link"
                  activeClassName="active"
                  to="/portfolio"
                >
                  <i className="fas fa-tasks d-inline-block mr-2"></i>
                  Portfólio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="menu__link"
                  activeClassName="active"
                  to="/contato"
                >
                  <i className="fas fa-envelope d-inline-block mr-2"></i>
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
