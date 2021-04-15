import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PortfolioList from '../../components/PortfolioList/PortfolioList';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Head from '../../components/Head';

import * as S from './styles';

export default () => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    fetch('/api/api.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

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
      <S.Home>
        <Head title="" />
        <div className="content home animeUp">
          <h1 className="title-tag">{data?.home.titulo}</h1>
          <p>{data?.home.descricao}</p>

          <h2 className="title-tag">Trabalhos</h2>

          {data && data.portfolio.length ? (
            <PortfolioList onHandleModal={handleModal} jobs={data.portfolio} />
          ) : (
            <Loading />
          )}

          <div className="text-center py-3">
            <Link to="/portfolio" className="btn-live">
              Ver Meus Trabalhos
            </Link>
          </div>
        </div>
      </S.Home>
    </>
  );
};
