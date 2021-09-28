import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 0.5rem 1rem;
  background: var(--gray-2);
  box-shadow: 7px 5px 21px 0 rgba(93, 94, 99, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  transition: all 0.3s ease;

  .socials {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 9.375rem;
    margin: 0 auto 2rem auto;
  }

  .social,
  .redes-sociais a {
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
      color: var(--blue-2);
    }
  }

  .logo {
    max-width: 3.125rem;
  }
`;
