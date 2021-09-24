import styled from "styled-components";

export const Home = styled.section`
  .content {
    padding: 30px;
    flex: 1;
  }
`;

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.4;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 35rem;
  max-width: 100%;
  margin-left: auto;

  @media (max-width: 767px) {
    display: none;
  }
`;
