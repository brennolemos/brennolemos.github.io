import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import GlobalStyle from './styles/global';
// import "./app.css";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer.tsx';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);
  const toggleTheme = () => {
    console.log('entrou');
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <main className="main-container container-fluid">
          <div className="row">
            {/* <div className=""> */}
            <Header toggleTheme={toggleTheme} />
            {/* </div> */}
            <div className="col-md px-0 position-static d-flex flex-column min-vh-100">
              <Route path="/" component={Home} exact />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/sobre" component={About} />
              <Route path="/contato" component={Contact} />
              <Footer />
            </div>
          </div>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
