import styled from 'styled-components';

export const IconContainer = styled.div`
  background-color: var(--blue-2);
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-3);
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 50%;
  }
`;
