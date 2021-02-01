import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 10px 30px;
  background: ${(props) => props.theme.colors.backgroundPrimary};

  box-shadow: 7px 5px 21px 0 rgba(93, 94, 99, 0.18);
  border-top: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.color};
  transition: all 0.3s ease;

  .socials {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 150px;
    margin: 0 auto 30px auto;
  }

  .social,
  .redes-sociais a {
    font-size: 24px;
    /* color: #626d73; */
    &:hover {
      opacity: 0.8;
    }
  }

  .logo {
    max-width: 50px;
  }
`;
