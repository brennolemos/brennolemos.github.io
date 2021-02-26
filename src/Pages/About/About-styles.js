import styled from 'styled-components';

export const About = styled.section`
  flex: 1;

  p {
    line-height: 1.4em;
    font-size: 18px;
    /* color: #626d73; */
    color: ${({ theme }) => theme.colors.text3};
    margin-bottom: 30px;
    max-width: 520px;
  }
`;
