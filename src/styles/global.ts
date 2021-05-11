import { createGlobalStyle } from 'styled-components';
import theme from './themes/dark';

type MyProps = {
  theme: typeof theme;
};

const GlobalStyle = createGlobalStyle<MyProps>`
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
  --white: #fff;
  --gray-1: #14141c;
  --gray-2: #1e1e26;
  --gray-3: #282830;

  --blue-1: #0068b3;
  --blue-2: #22a5e6;
  --green-1: #afbf30;
  --green-2: #deeb52;

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
  letter-spacing: 0.05em;
  color: var(--white);
  font-family: Dosis;

  &::after {
    content: '';
    display: block;
    width: 4rem;
    height: .25rem;
    border-radius: .5rem;
    margin-top: .25rem;
    margin-bottom: 2rem;
    background: var(--blue-2);
  }
}

.title-tag--small {
  font-size: 14px;
  color: ${(props) => props.theme.colors.textSecondary};
}

.btn {
    font-weight: bold;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: inline-block;
    color: var(--white);
    background-color: var(--blue-2);
    border: 2px solid var(--blue-2);
    border-radius: .25rem;
    padding: .5rem 2rem;
    margin-right: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: transparent;
      color: var(--blue-2);
    }
}


/* Internas */
body.interna {
  background: ${(props) => props.theme.colors.backgroundSecundary};
}

.content.interna {
  padding: 0 0 30px 0;
  background: ${(props) => props.theme.colors.backgroundSecundary};
  color: ${(props) => props.theme.colors.textSecondary};
  flex: 1;
}

.header-interna {
  padding: 2rem;
  color: var(--white);
  background: var(--gray-1);

  h1 {
    font-size: 2rem;

    &::after {
      margin-bottom: 0;
    }
  }
}

.conteudo {
  padding: 2rem;
  max-width: 73.125rem;
  margin: 0 auto;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textSecondary};
  }
}


.curriculo {
  margin-bottom: 2rem;
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

export default GlobalStyle;
