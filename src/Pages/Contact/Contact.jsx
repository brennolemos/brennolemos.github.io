import React, { useState, useEffect } from 'react';
import Loading from '../../Components/Loading/Loading';
import './contact.css';

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/api.json')
      .then((response) => response.json())
      .then((json) => setData(json.contato));
  }, []);

  return (
    <section className="content interna contato animeUp">
      <header className="header-interna">
        <h1 className="title-tag">{data ? data.titulo : ''}</h1>
      </header>
      <div className="conteudo">
        <div className="row">
          <div className="col-md-12">
            {data ? (
              data.infos.map((info) => (
                <div className="item mb-4" key={info.id}>
                  <i className={info.icon}></i>
                  <p className="ml-2">{info.content}</p>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
