import React, { useState, useEffect } from 'react';

import Head from '../../components/Head';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';

import * as S from './styles';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    fetch('/api/api.json')
      .then((response) => response.json())
      .then((data) => setData(data.portfolio));
  });

  const handleModal = (modalInfos) => {
    setModal(modalInfos);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) setModal(null);
  };

  return (
    <>
      {modal ? (
        <Modal infos={modal} setModal={setModal} closeModal={closeModal} />
      ) : null}

      <Head title="Portfólio" />

      <section className="content interna portfolio animeUp">
        <header className="header-interna">
          <h1 className="title-tag">Portfólio</h1>
        </header>
        <div className="conteudo">
          {data ? (
            data.map((item) => (
              <div key={item.name}>
                <div className="row">
                  <div className="col-md-6">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="col-md-6">
                    <S.Subtitle>{item.name}</S.Subtitle>

                    <div className="my-3">
                      {item.tags.map((tag) => (
                        <span key={tag.name} className="badge badge-secondary">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <S.Text>{item.description}</S.Text>

                    <button
                      onClick={() => handleModal(item)}
                      className="btn-live"
                    >
                      Ver Mais
                    </button>
                  </div>
                </div>
                <div className="dropdown-divider my-5"></div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
