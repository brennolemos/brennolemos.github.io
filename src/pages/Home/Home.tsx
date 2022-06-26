import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loader } from 'rsuite';

import PortfolioList from 'src/components/PortfolioList/PortfolioList';
import Modal from 'src/components/Modal/Modal';
import Head from 'src/components/Head';

import illustration from 'src/assets/images/illustration.svg';
import * as S from './Home.styled';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

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
        <Modal open={open} handleClose={handleClose} infos={modal} setModal={setModal} closeModal={closeModal} />
      ) : null}
      <div className="container">
        <S.Home>
          <Head title="" />
          <div className="content home animeUp">
            {/* <h2 className="title-tag title-tag--small">{content?.home.titulo}</h2> */}
            <S.Intro>
              <div>
                <S.Title> {t('home.title')}</S.Title>
                <S.Description>{t('home.description')}</S.Description>
                <Link to="/sobre" className="btn">
                  {t('home.see_more')}
                </Link>
              </div>
              {/* <p>{content?.home.descricao}</p> */}
              <S.Image src={illustration} alt="" />
            </S.Intro>

            <div className="dropdown-divider my-5"></div>

            <h2 className="title-tag title-tag--small">{t('home.work')}</h2>
            {content && content.portfolio.length ? (
              <PortfolioList
                onHandleModal={handleModal}
                jobs={content.portfolio}
              />
            ) : (
              <Loader size="md" center backdrop content={t('general.loading')} />
            )}

            <div className="text-center py-3">
              <Link to="/portfolio" className="btn">
                {t('home.see_works')}
              </Link>
            </div>
          </div>
        </S.Home>
      </div>
    </>
  );
};
