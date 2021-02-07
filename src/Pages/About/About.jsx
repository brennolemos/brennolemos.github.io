import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import Timeline from '../../components/Timeline/Timeline';
import Skills from '../../components/Skills/Skills';
import './about.css';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/api.json')
      .then((response) => response.json())
      .then((json) => setData(json.sobre));
  }, []);

  return (
    <section className="content interna animeUp">
      <header className="header-interna">
        <h1 className="title-tag">{data ? data.titulo : ''}</h1>
      </header>

      {data ? (
        <div className="conteudo">
          <div className="row">
            <article className="sobre col-lg-6">
              <div className="d-flex">
                <div className="icon-subtitle">
                  <i className="fas fa-torii-gate"></i>
                </div>
                <h2>Um Samurai</h2>
              </div>
              {data.descricao.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </article>

            <article className="curriculo col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <Timeline infos={data.experiencia} />
                </div>
                <div className="col-md-6">
                  <Timeline infos={data.educacao} />
                </div>
              </div>
            </article>
          </div>

          <article className="skills mt-4">
            <div className="d-flex align-items-center justify-content-center">
              <div className="icon-subtitle">
                <i className="fas fa-user-cog"></i>
              </div>
              <h2>Skills</h2>
            </div>
            <Skills skills={data.skills} />
          </article>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default About;
