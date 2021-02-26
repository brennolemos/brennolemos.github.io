import styled from 'styled-components';

export const Home = styled.section`
  /* Content */
  .home {
    /* background: linear-gradient(
    135deg,
    var(--azul-claro) 0%,
    var(--azul-escuro) 100%
  );
  background-size: 400% 400%;
  animation: gradient 10s ease infinite; */
    /* background: #f5f5f5; */
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .body-home {
    min-width: 100%;
  }

  .content {
    padding: 30px;
    flex: 1;
  }

  .content p {
    font-size: 36px;
    /* color: var(--branco); */
    /* color: #2d3940; */
    color: ${(props) => props.theme.colors.textSecondary};

    line-height: 1.3em;
    margin-bottom: 60px;
  }
`;
