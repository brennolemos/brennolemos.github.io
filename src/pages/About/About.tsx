import React from "react";
import { Person } from "@styled-icons/evaicons-solid";
import { useTranslation } from "react-i18next";

import Head from "../../components/Head";
import Loading from "../../components/Loading/Loading";
import Timeline from "../../components/Timeline/Timeline";
import Skills from "../../components/Skills";

import * as S from "./styles";

type Content = {
  titulo: string;
  descricao: string[];
  experiencia: Infos;
  educacao: Infos;
  skills: Skills[];
};

type Infos = {
  titulo: string;
  icon: string;
  list: Timeline[];
};

type Timeline = {
  id: string;
  titulo: string;
  ocupacao: string;
  periodo: string;
};

type Skills = {
  id: string;
  name: string;
  icon: string;
};

export default () => {
  const [content, setContent] = React.useState<Content | null>(null);
  const { t } = useTranslation();

  const loadData = async () => {
    const response = await fetch("/api/api.json");
    const data = await response.json();

    setContent(data.sobre);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <S.About>
      <div className="content interna animeUp">
        <Head title="Sobre" />
        <header className="header-interna">
          <h1 className="title-tag">{t("about.title")}</h1>
        </header>

        {content ? (
          <div className="conteudo">
            <div className="row">
              <article className="sobre col-lg-6">
                <div className="d-flex">
                  <div className="icon-subtitle">
                    <i className="fas fa-road"></i>
                  </div>
                  <h2>{t("about.path")}</h2>
                </div>
                {content.descricao.map((text: string, index: number) => (
                  <S.Text key={index}>{text}</S.Text>
                ))}
              </article>

              <article className="curriculo col-lg-6">
                <div className="row">
                  <div className="col-md-6">
                    <Timeline
                      infos={t("about.experience", { returnObjects: true })}
                    />
                  </div>
                  <div className="col-md-6">
                    <Timeline
                      infos={t("about.education", { returnObjects: true })}
                    />
                  </div>
                </div>
              </article>
            </div>

            <article className="skills mt-4">
              <div className="d-flex align-items-center justify-content-center">
                <div className="icon-subtitle">
                  <Person size={36} />
                </div>
                <h2>Skills</h2>
              </div>
              <Skills skills={content.skills} />
            </article>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </S.About>
  );
};
