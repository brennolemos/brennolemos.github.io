import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  padding: 5px 15px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  /* Side Nav */
  .sidenav {
    background: var(--branco);
    padding: 30px 0;
    flex: 1;
    max-width: 240px;
    width: 100%;
    height: 100%;
    box-shadow: 7px 5px 21px 0 rgba(93, 94, 99, 0.18);
    position: fixed;
  }

  .menu {
    margin: 30px 0;
  }

  .menu::before,
  .menu::after {
    content: '';
    display: block;
    height: 5px;
    width: 150px;
    background: #dce2e6;
    border-radius: 10px;
    margin: 0 auto;
  }

  .menu::before {
    margin-bottom: 15px;
  }

  .menu::after {
    margin-top: 15px;
  }

  .menu__link {
    display: block;
    color: ${(props) => props.theme.colors.textContent};
    font-size: 18px;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .menu__link:hover {
    color: #afbf30;
  }

  .menu__link.active {
    color: #afbf30;
    font-weight: bold;
  }

  .sidenav img {
    margin: 0 auto;
  }

  .picture {
    max-width: 60px;
  }

  .header__title {
    font-family: Dosis;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    margin-left: 10px;
    color: ${(props) => props.theme.colors.textSecondary};
    transition: all 0.3s ease;
  }
  .menu-mobile-btn {
    display: block;
    z-index: 300;
    color: #626d73;
    width: 36px;
    height: 24px;
    border-top: 4px solid;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
  }

  .menu-mobile-btn::before {
    content: '';
    display: block;
    height: 4px;
    background: currentColor;
    position: relative;
    transition: transform 0.3s ease;
    top: 6px;
    border-radius: 2px;
  }

  .menu-mobile-btn::after {
    content: '';
    display: block;
    height: 4px;
    background: currentColor;
    position: relative;
    transition: transform 0.3s ease;
    top: 12px;
    border-radius: 2px;
  }

  .menu-mobile-btn.active {
    border-top-color: transparent;
  }

  .menu-mobile-btn.active::before {
    top: 6px;
    transform: rotate(135deg);
  }

  .menu-mobile-btn.active::after {
    top: 2px;
    transform: rotate(45deg);
  }

  .menu-mobile {
    display: none;
    position: absolute;
    background: var(--branco);
    width: 150px;
    z-index: 200;
    right: 5px;
    top: 0;
    padding: 40px 10px 10px 10px;
    text-align: right;
  }

  .menu-mobile.active {
    display: block;
    animation: show-right 0.5s forwards;
  }

  .menu-mobile .menu__link {
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #b9c1c5;
  }

  .menu-mobile li:last-child .menu__link {
    border-bottom: none;
  }

  @keyframes show-right {
    from {
      opacity: 0;
      transform: translate3d(-30px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
