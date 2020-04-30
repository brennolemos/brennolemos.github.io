import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./app.css";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <main className="main-container container-fluid">
        <div className="row">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/sobre" component={About} />
          <Route path="/contato" component={Contact} />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
