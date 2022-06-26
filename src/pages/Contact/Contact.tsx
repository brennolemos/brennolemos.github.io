import React from "react";
import { useTranslation } from "react-i18next";
import { Loader } from 'rsuite';


import Head from "../../components/Head";

import * as S from "./styles";

type Content = {
  titulo: string;
  infos: Info[];
};

type Info = {
  id: string;
  icon: string;
  content: string;
};

const Contact = () => {
  const [content, setContent] = React.useState<Content | null>(null);
  const { t } = useTranslation();

  const loadData = async () => {
    const response = await fetch("/api/api.json");
    const data = await response.json();

    setContent(data.contato);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <section className="content interna contato animeUp">
      <Head title="Contato" />
      <header className="header-interna">
        <h1 className="title-tag">{t("contact.title")}</h1>
      </header>
      <div className="conteudo">
        <div className="row">
          <div className="col-md-12">
            {content ? (
              content.infos.map((info) => (
                <S.Item key={info.id}>
                  <i className={info.icon}></i>
                  <S.Text>{info.content}</S.Text>
                </S.Item>
              ))
            ) : (
              <Loader size="md" center backdrop content={`${t('general.loading')}...`} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
