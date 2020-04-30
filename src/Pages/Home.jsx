import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioList from "../Components/PortfolioList";
import Loading from "../Components/Loading";
import "./home.css";

const Home = () => {
  const [title, setTitle] = useState(
    "Breno Lemos | Desenvolvedor Front-End em Fortaleza"
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = title;
    fetch("/api/api.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [title]);

  return (
    <section className="content home">
      <h1 className="title-tag">{data ? data.home.titulo : ""}</h1>
      <p>{data ? data.home.descricao : ""}</p>

      <h2 className="title-tag">Trabalhos</h2>

      {data && data.portfolio.length ? (
        <PortfolioList jobs={data.portfolio} />
      ) : (
        <Loading />
      )}

      <div className="text-center py-3">
        <Link to="/portfolio" className="btn-live">
          Ver Meus Trabalhos
        </Link>
      </div>
    </section>
  );
};

export default Home;
