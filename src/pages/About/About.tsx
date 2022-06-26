import React from 'react';
import { Person } from '@styled-icons/evaicons-solid';
import { useTranslation, Trans } from 'react-i18next';
import { Container, Grid, Row, Col, Loader } from 'rsuite';

import Head from 'src/components/Head';
import Timeline from 'src/components/Timeline/Timeline';
import Skills from 'src/components/Skills';

import * as S from './About.styled';

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
  const { t, i18n } = useTranslation();

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
          <h1 className="title-tag">{t('about.title')}</h1>
        </header>

        {content ? (
          <Container style={{ margin: '2rem 0' }}>
            <Grid>
              <Row>
                <Col md={12}>
                  <article className="sobre">
                    <div className="d-flex">
                      <div className="icon-subtitle">
                        <i className="fas fa-road"></i>
                      </div>
                      <S.Subtitle>{t('about.path')}</S.Subtitle>
                    </div>

                    <Trans>
                      <S.Text>
                        {i18n.t('about.description', {
                          joinArrays: `<br/></br/><br/>`,
                        })}
                      </S.Text>
                    </Trans>
                  </article>
                </Col>

                <Col md={6}>
                  <Timeline
                    infos={t('about.experience', { returnObjects: true })}
                  />
                </Col>

                <Col md={6}>
                  <Timeline
                    infos={t('about.education', { returnObjects: true })}
                  />
                </Col>
              </Row>
            </Grid>

            <article className="skills mt-4">
              <Grid>
                <Row>
                  <Col md={24}>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="icon-subtitle">
                        <Person size={36} />
                      </div>
                      <S.Subtitle>Skills</S.Subtitle>
                    </div>

                    <Skills skills={content.skills} />
                  </Col>
                </Row>
              </Grid>
            </article>
          </Container>
        ) : (
          <Loader size="md" center backdrop content={`${t('general.loading')}...`} />
        )}
      </div>
    </S.About>
  );
};
