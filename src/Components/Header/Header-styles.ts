import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: var(--gray-2);
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  .menu__link {
    display: block;
    color: var(--white);
    font-size: 1rem;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: var(--blue-2);
    }

    &.active {
      color: var(--blue-2);
      font-weight: bold;
    }
  }

  .picture {
    max-width: 4rem;
  }

  .header__title {
    font-family: Dosis;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;

    margin-left: 0.5rem;
    color: var(--white);
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    .header__title {
      display: none;
    }
  }

  .menu-mobile-btn {
    display: block;
    z-index: 300;
    color: #626d73;
    width: 2.25rem;
    height: 1.5rem;
    border-top: 0.25rem solid;
    border-radius: 2px;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      display: block;
      height: 0.25rem;
      background: currentColor;
      position: relative;
      transition: transform 0.3s ease;
      top: 0.375rem;
      border-radius: 2px;
    }

    &::after {
      content: '';
      display: block;
      height: 0.25rem;
      background: currentColor;
      position: relative;
      transition: transform 0.3s ease;
      top: 0.75rem;
      border-radius: 2px;
    }

    &.active {
      border-top-color: transparent;
    }
  }

  .menu-mobile-btn.active::before {
    top: 0.375rem;
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
    width: 9.375rem;
    z-index: 200;
    right: 5px;
    top: 0;
    padding: 2.5rem 0.5rem 0.5rem 0.5rem;
    text-align: right;

    &.active {
      display: block;
      animation: show-right 0.5s forwards;
    }

    .menu__link {
      padding: 0.5rem 0;
      text-align: center;
      border-bottom: 1px solid #b9c1c5;
    }
  }

  .menu-mobile li:last-child .menu__link {
    border-bottom: none;
  }

  @keyframes show-right {
    from {
      opacity: 0;
      transform: translate3d(-2rem, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
