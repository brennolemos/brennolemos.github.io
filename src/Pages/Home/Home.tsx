import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PortfolioList from '../../components/PortfolioList/PortfolioList';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Head from '../../components/Head';

import illustration from '../../assets/images/illustration.svg';
import * as S from './Home-styles';

type ContentProps = {
  home: {
    id: string;
    titulo: string;
    descricao: string;
  };
  portfolio: Jobs[];
};

type Jobs = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageXg: string;
  tags: Tags[];
};

type ModalProps = {
  name: string;
  image: string;
  tags: Tags[];
  description?: string;
  imageXg?: string;
};

type Tags = {
  name: string;
};

export default () => {
  const [content, setContent] = useState<ContentProps | null>(null);
  const [modal, setModal] = useState<ModalProps | null>(null);

  const loadData = async () => {
    const response = await fetch('/api/api.json');
    const data = await response.json();

    setContent(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleModal = (modalInfos: ModalProps) => {
    setModal(modalInfos);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeModal = (event: MouseEvent) => {
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
          {/* <h2 className="title-tag title-tag--small">{content?.home.titulo}</h2> */}
          <S.Intro>
            <div>
              <S.Title>Olá, eu sou Breno!</S.Title>
              <S.Description>
                Tenho 26 anos, moro em Fortaleza, sou engenheiro de formação,
                mas desenvolvedor por vocação, e um apaixonado por
                Desenvolvimento Web, além de fascinado pelo Ecossistema Digital.
                Atualmente trabalho como Desenvolvedor Web e Front-end.
              </S.Description>
              <Link to="/sobre" className="btn">
                Saiba Mais
              </Link>
            </div>
            {/* <p>{content?.home.descricao}</p> */}
            <S.Image src={illustration} alt="" />
          </S.Intro>

          <h2 className="title-tag title-tag--small">Trabalhos</h2>
          {content && content.portfolio.length ? (
            <PortfolioList
              onHandleModal={handleModal}
              jobs={content.portfolio}
            />
          ) : (
            <Loading />
          )}

          <div className="text-center py-3">
            <Link to="/portfolio" className="btn">
              Ver Meus Trabalhos
            </Link>
          </div>
        </div>
      </S.Home>
    </>
  );
};
