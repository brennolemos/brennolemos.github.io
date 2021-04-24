import styled from 'styled-components';

export const Subtitle = styled.h2`
  margin: 0;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    background: linear-gradient(94.76deg, #deeb52 0%, #afbf30 100%);
    border-radius: 10px;
    margin-top: 5px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 1.4em;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.textContent};
`;
