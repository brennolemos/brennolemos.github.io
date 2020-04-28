import React from "react";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/sobre" component={About} />
      <Route path="/contato" component={Contact} />
    </BrowserRouter>
  );
};

export default App;
