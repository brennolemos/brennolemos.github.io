import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="content interna portfolio">
      <header className="header-interna">
        <h1 className="title-tag">Portfólio</h1>
      </header>
      <div className="conteudo">
        <div className="row">
          <div className="col-md">
            <img src="img/delfos.jpg" alt="Delfos IM" />
          </div>
          <div className="col">
            <h2>Delfos IM</h2>

            <div className="my-3">
              <span className="badge badge-secondary">UX Design</span>
              <span className="badge badge-secondary">UI Design</span>
              <span className="badge badge-secondary">Front End</span>
              <span className="badge badge-secondary">Wordpress</span>
            </div>
            <p>
              Trabalho como Desenvolvedor Front End e UX Designer há alguns
              anos, depois de decidir mudar de área, já que antes eu atuava como
              Engenheiro de Telecomunicações.
            </p>

            <a href="#" className="btn-live">
              Ver Site
            </a>
          </div>
        </div>
        <div className="dropdown-divider my-5"></div>

        <div className="row">
          <div className="col-md">
            <img src="img/regulus.jpg" alt="Regulus Tecnologia" />
          </div>
          <div className="col">
            <h2>Regulus Tecnologia</h2>
            <div className="my-3">
              <span className="badge badge-secondary">UX Design</span>
              <span className="badge badge-secondary">UI Design</span>
              <span className="badge badge-secondary">Front End</span>
              <span className="badge badge-secondary">Wordpress</span>
            </div>
            <p>
              Trabalho como Desenvolvedor Front End e UX Designer há alguns
              anos, depois de decidir mudar de área, já que antes eu atuava como
              Engenheiro de Telecomunicações.
            </p>

            <a href="#" className="btn-live">
              Ver Site
            </a>
          </div>
        </div>
        <div className="dropdown-divider my-5"></div>
      </div>
    </section>
  );
};

export default Portfolio;
