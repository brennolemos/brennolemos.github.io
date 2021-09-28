import styled from 'styled-components';

export const Modal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10001;

  @media (max-width: 767px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, transparent 200px, var(--white) 200px);
  display: grid;
  grid-gap: 3rem;
  padding: 3rem 3rem 3rem 0;
  animation: fadeIn 0.3s forwards;

  @media (max-width: 767px) {
    grid-gap: 1rem;
    background: var(--white);
    padding: 0.5rem 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3D(0, -4rem, 0);
    }
    to {
      opacity: 1;
      transform: translate3D(0, 0, 0);
    }
  }
`;

export const Close = styled.button`
  color: #626d73;
  line-height: 1;
  border: none;
  outline: none;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: transparent;

  i {
    background: var(--white);
    border-radius: 50%;
  }
`;

export const Image = styled.div`
  grid-column: 1;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) {
    grid-row: 2;
  }

  img {
    max-width: 31.25rem;
    display: block;

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
`;

export const Infos = styled.div`
  grid-column: 2;
  max-width: 37.5rem;

  @media (max-width: 767px) {
    padding: 0.5rem;
    grid-column: 1;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #2d3940;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  line-height: 1.4em;
  font-size: 1rem;
  color: #626d73;
  margin-top: 2rem;
`;
