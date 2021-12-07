import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

import foto from "src/assets/images/foto.png";
import BR from "src/assets/images/br.png";
import US from "src/assets/images/us.png";
import Switch from "../Switch/Switch";
import * as S from "./Header-styles";

interface Props {
  toggleTheme: () => void;
}

export default ({ toggleTheme }: Props) => {
  const selectedLanguage = localStorage.getItem("i18nextLng") || "en";
  const [menuMobileIsActive, setMenuMobileIsActive] = React.useState(false);
  const { title } = React.useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const toggleMenuMobile = () => setMenuMobileIsActive(!menuMobileIsActive);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  React.useEffect(() => {
    setMenuMobileIsActive(false);
  }, [pathname]);

  React.useEffect(() => {
    changeLanguage(selectedLanguage);
  }, []);

  return (
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
                {t("menu.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/sobre"
              >
                {t("menu.about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/portfolio"
              >
                {t("menu.portfolio")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/contato"
              >
                {t("menu.contact")}
              </NavLink>
            </li>
          </ul>
          <Switch toggleTheme={toggleTheme} checked={title === "dark"} />
          <S.LanguagesContainer>
            <S.Language
              src={BR}
              onClick={() => changeLanguage("ptBR")}
              alt="pt-BR"
              active={selectedLanguage === "ptBR"}
            />
            <S.Language
              src={US}
              onClick={() => changeLanguage("en")}
              alt="us"
              active={selectedLanguage === "en"}
            />
          </S.LanguagesContainer>
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
                {t("menu.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/sobre"
              >
                <i className="fas fa-address-card d-inline-block mr-2"></i>
                {t("menu.about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/portfolio"
              >
                <i className="fas fa-tasks d-inline-block mr-2"></i>
                {t("menu.portfolio")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__link"
                activeClassName="active"
                to="/contato"
              >
                <i className="fas fa-envelope d-inline-block mr-2"></i>
                {t("menu.contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </S.Header>
  );
};
