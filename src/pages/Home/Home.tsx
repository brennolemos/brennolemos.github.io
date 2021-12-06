import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PortfolioList from "../../components/PortfolioList/PortfolioList";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";
import Head from "../../components/Head";

import illustration from "../../assets/images/illustration.svg";
import * as S from "./Home-styles";

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
  const { t } = useTranslation();

  const loadData = async () => {
    const response = await fetch("/api/api.json");
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
      behavior: "smooth",
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
      <div className="container">
        <S.Home>
          <Head title="" />
          <div className="content home animeUp">
            {/* <h2 className="title-tag title-tag--small">{content?.home.titulo}</h2> */}
            <S.Intro>
              <div>
                {t("test")}

                <S.Title> {t("home.title")}</S.Title>
                <S.Description>{t("home.description")}</S.Description>
                <Link to="/sobre" className="btn">
                  {t("home.see_more")}
                </Link>
              </div>
              {/* <p>{content?.home.descricao}</p> */}
              <S.Image src={illustration} alt="" />
            </S.Intro>

            <div className="dropdown-divider my-5"></div>

            <h2 className="title-tag title-tag--small">{t("home.work")}</h2>
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
                {t("home.see_works")}
              </Link>
            </div>
          </div>
        </S.Home>
      </div>
    </>
  );
};
