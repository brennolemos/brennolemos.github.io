import styled from 'styled-components';

export const About = styled.section`
  flex: 1;

  .icon-subtitle {
    background-color: var(--blue-2);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--gray-3);
    margin-right: 1rem;
  }
`;

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const Text = styled.p`
  line-height: 1.4em;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textContent};
  margin-bottom: 30px;
  max-width: 520px;
`;
