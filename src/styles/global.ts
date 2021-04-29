import { createGlobalStyle } from 'styled-components';
import theme from './themes/dark';

type MyProps = {
  theme: typeof theme;
};

export default createGlobalStyle<MyProps>`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500;600&display=swap');

/* Geral */
body,
p,
h1,
h2,
h3,
h4,
p,
ul,
li {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}
a,
a:hover {
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}

/* Cores */
:root {
  --branco: #fff;
  --azul-claro: #22a5e6;
  --azul-escuro: #0068b3;
  --verde-claro: #deeb52;
  --verde-escuro: #afbf30;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: ${(props) => props.theme.colors.backgroundSecundary};
  transition: all .3s ease;
  color: ${(props) => props.theme.colors.textSecondary}
}

.full-height {
  min-height: 100vh;
}

.title-tag {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.05em;
    /* text-transform: uppercase; */
    /* color: var(--branco); */
    color: #2d3940;
    color: ${(props) => props.theme.colors.textSecondary};

    font-family: Dosis;
  }

  .title-tag::after {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    /* background: linear-gradient(94.76deg, #deeb52 0%, #afbf30 100%); */
    background: #cbdc3d;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .btn-live {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: inline-block;
    color: var(--branco);
    background-color: var(--verde-escuro);
    border: 2px solid var(--verde-escuro);
    box-shadow: 7px 5px 21px 0 rgba(93, 94, 99, 0.18);
    border-radius: 10px;
    padding: 10px 35px;
    margin-right: 15px;
    transition: all 0.3s ease;
  }

  .btn-live:hover {
    background-color: transparent;
    color: #2d3940;
    border-color: #2d3940;
  }

  .btn-project {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #afbf30;
    border: 2px solid #afbf30;
    border-radius: 10px;
    padding: 10px 25px;
    margin-right: 15px;
    transition: all 0.3s ease;
  }

  .btn-project:hover {
    border: 2px solid var(--azul-escuro);
    color: var(--azul-escuro);
  }

  .btn-white {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--branco);
    background: linear-gradient(101.31deg, #deeb52 0%, #afbf30 100%);
    box-shadow: 0px 1px 5px rgba(45, 57, 64, 0.2),
      0px 3px 4px rgba(45, 57, 64, 0.12), 0px 2px 4px rgba(45, 57, 64, 0.14);
    border-radius: 10px;
    padding: 10px 35px;
    margin-right: 15px;
    transition: all 0.3s ease;
  }

  .btn-white:hover {
    color: #afbf30;
    background: var(--branco);
  }

/* Internas */
body.interna {
  background: ${(props) => props.theme.colors.backgroundPrimary};
}

.content.interna {
  padding: 0 0 30px 0;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.textSecondary};
  flex: 1;
}

.header-interna {
  padding: 30px;
  background: #fff;
  background: ${(props) => props.theme.colors.backgroundSecundary};
  /* background: linear-gradient(
    135deg,
    var(--azul-claro) 0%,
    var(--azul-escuro) 100%
  );
  background-size: 400% 400%;
  animation: gradient 10s ease infinite; */
}

.header-interna h1 {
  font-size: 36px;
}

.header-interna h1::after {
  margin-bottom: 0;
}

.conteudo {
  padding: 30px;
  max-width: 1170px;
  margin: 0 auto;
}

.conteudo h2 {
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-left: 15px;
}

.curriculo {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}

.d-flex {
  display: flex;
}
.d-flex.wrap {
  flex-wrap: wrap;
}
.sobre .d-flex {
  align-items: center;
  margin-bottom: 15px;
}

.icon-subtitle {
  background-color: #cbdc3d;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #2d3940;
}

.animeUp {
  transform: translateY(-20px);
  opacity: 0;
  animation: animeUp 0.3s forwards;
}

@keyframes animeUp {
  to {
    transform: initial;
    opacity: initial;
  }
}

`;
