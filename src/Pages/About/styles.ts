import styled from 'styled-components';

export const About = styled.section`
  flex: 1;
`;

export const Text = styled.p`
  line-height: 1.4em;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textContent};
  margin-bottom: 30px;
  max-width: 520px;
`;
