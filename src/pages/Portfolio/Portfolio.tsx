import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Loader } from 'rsuite';

import Head from 'src/components/Head';
import Modal from 'src/components/Modal/Modal';
import Badge from 'src/components/Badge';

import * as S from './Portfolio.styled';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
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
        <Modal open={open} infos={modal} handleClose={handleClose} setModal={setModal} closeModal={closeModal} />
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
                        onClick={() => {
                          handleModal({
                            ...item,
                            description: t(
                              `portfolio.list.${index}.description`,
                            ),
                          })
                          handleOpen()
                        }
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
            <Loader size="md" center backdrop content={t('general.loading')} />
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
