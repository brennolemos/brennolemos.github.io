import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background: var(--gray-2);
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  height: 6rem;

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

  .menu-mobile {
    display: block;
    position: absolute;
    top: 6rem;
    right: 0;
    z-index: 2000;
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.colors.backgroundSecundary};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    transform: translateX(-10px);
    opacity: 0;
    visibility: hidden;
    width: 9.375rem;
    transition: all 0.2s ease;
    /* padding: 2.5rem 0.5rem 0.5rem 0.5rem; */
    /* text-align: right; */

    &.active {
      /* display: block; */
      transform: initial;
      opacity: 1;
      visibility: visible;
      /* animation: show-right 0.5s forwards; */
    }

    .menu__link {
      display: flex;
      align-items: center;
      width: 100%;

      color: ${(props) => props.theme.colors.textSecondary};
      padding: 0.5rem 0;
      text-align: center;
      border-bottom: 1px solid #b9c1c5;

      &:hover,
      &.active {
        color: var(--blue-2);
      }
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

export const MenuBtn = styled.button`
  background: var(--gray-3);
  border-radius: 0.2rem;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
  color: var(--white);

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: all 0.2s ease;
  }

  &:hover,
  &:focus,
  &.is-active {
    outline: none;
    border-color: var(--blue-2);
    color: var(--blue-2);
  }

  &.is-active {
    &::after {
      transform: rotate(90deg);
      width: 0.25rem;
      height: 0.25rem;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
`;

export const LanguagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid #e9ecef;

  @media (max-width: 991px) {
    margin-left: auto;
    padding-left: 0;
    border-left: none;
    justify-content: center;
  }
`;

export const Language = styled.img<{ active?: boolean }>`
  max-width: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: ${(props) => (props.active ? "grayscale(0)" : "grayscale(1)")};

  &:hover {
    filter: grayscale(0);
  }
`;
