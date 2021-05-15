import React from 'react';

import Head from '../../components/Head';
import Loading from '../../components/Loading/Loading';
import Timeline from '../../components/Timeline/Timeline';
import Skills from '../../components/Skills';

import * as S from './styles';

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

  const loadData = async () => {
    const response = await fetch('/api/api.json');
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
          <h1 className="title-tag">{content?.titulo}</h1>
        </header>

        {content ? (
          <div className="conteudo">
            <div className="row">
              <article className="sobre col-lg-6">
                <div className="d-flex">
                  <div className="icon-subtitle">
                    <i className="fas fa-road"></i>
                  </div>
                  <h2>Trajetória</h2>
                </div>
                {content.descricao.map((text: string, index: number) => (
                  <S.Text key={index}>{text}</S.Text>
                ))}
              </article>

              <article className="curriculo col-lg-6">
                <div className="row">
                  <div className="col-md-6">
                    <Timeline infos={content.experiencia} />
                  </div>
                  <div className="col-md-6">
                    <Timeline infos={content.educacao} />
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
