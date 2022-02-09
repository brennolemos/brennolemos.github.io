import styled from 'styled-components';

export const Timeline = styled.ul`
  margin: 0 auto;
  padding: 1rem;
`;

export const Item = styled.li`
  position: relative;
  padding: 0.25rem 1rem 1rem 2rem;
  margin-left: 1rem;
  border-left: 2px solid #626d73;
`;

export const Icon = styled.span`
  position: absolute;
  top: 0.25rem;
  left: -1rem;
  background: var(--blue-2);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  color: var(--gray-3);
`;

export const Period = styled.span`
  font-style: italic;
  font-size: 0.875rem;
  color: #95a0a6;

  &::after {
    content: '';
    display: block;
    width: 4rem;
    height: 0.25rem;
    background: var(--blue-2);
    border-radius: 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.textContent};
  /* margin-bottom: 0.25rem; */
  line-height: 1.1;
  max-width: 11.25rem;
`;

export const Place = styled(Period)`
  &::after {
    display: none;
  }
`;
