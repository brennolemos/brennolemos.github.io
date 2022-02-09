import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from 'rsuite';

import Head from '../../components/Head';
import Modal from '../../components/Modal/Modal';
import Badge from '../../components/Badge';
import Loading from '../../components/Loading/Loading';

import * as S from './styles';

type Infos = {
  name: string;
  image: string;
  tags: Tags[];
  description?: string;
  imageXg?: string;
  link?: string;
};

type Tags = {
  name: string;
};

const Portfolio = () => {
  const [content, setContent] = React.useState<Infos[] | null>(null);
  const [modal, setModal] = React.useState<Infos | null>(null);
  const { t, i18n } = useTranslation();

  const loadData = async () => {
    const response = await fetch('/api/api.json');
    const data = await response.json();

    setContent(data.portfolio);
  };

  const handleModal = (modalInfos: Infos) => {
    setModal(modalInfos);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeModal = (event: MouseEvent) => {
    if (event.target === event.currentTarget) setModal(null);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {modal ? (
        <Modal infos={modal} setModal={setModal} closeModal={closeModal} />
      ) : null}
      <Head title="Portfólio" />
      <section className="content interna portfolio animeUp">
        <header className="header-interna">
          <h1 className="title-tag">{t('portfolio.title')}</h1>
        </header>
        <div className="conteudo">
          {/* {t("portfolio.list", { returnObjects: true }).map()} */}

          {content ? (
            content.map((item, index) => (
              <div key={item.name}>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      style={{ borderRadius: '.5rem' }}
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <S.Subtitle>{t(`portfolio.list.${index}.name`)}</S.Subtitle>

                    <div className="my-3">
                      {item.tags.map((tag) => (
                        <Badge key={tag.name} text={tag.name} />
                      ))}
                    </div>
                    <S.Text>{t(`portfolio.list.${index}.description`)}</S.Text>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        {t('home.see_more')}
                      </a>
                    ) : (
                      <button
                        onClick={() =>
                          handleModal({
                            ...item,
                            description: t(
                              `portfolio.list.${index}.description`,
                            ),
                          })
                        }
                        className="btn"
                      >
                        {t('home.see_more')}
                      </button>
                    )}
                  </div>
                </div>

                <Divider />
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
