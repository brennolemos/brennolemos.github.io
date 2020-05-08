import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app.css";

import Header from "../Components/Header/Header";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <main className="main-container container-fluid">
        <div className="row">
          {/* <div className=""> */}
            <Header />
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
  );
};

export default App;
