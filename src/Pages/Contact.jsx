import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import "./contact.css";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/api.json")
      .then((response) => response.json())
      .then((json) => setData(json.contato));
  });

  return (
    <section className="content interna contato">
      <header className="header-interna">
        <h1 className="title-tag">{data ? data.titulo : ""}</h1>
      </header>
      <div className="conteudo">
        <div className="row">
          <div className="col-md-12">
            {data ? (
              data.infos.map((info) => (
                <div className="item mb-4">
                  <i className={info.icon}></i>
                  <p className="ml-2">{info.content}</p>
                </div>
              ))
            ) : (
              <Loading />
            )}

            {/* <div className="item mb-4">
              <img src="img/close-envelope.svg" className="mr-3" alt="Email" />
              <p>brenomiros@gmail.com</p>
            </div>

            <div className="item mb-4">
              <img src="img/linkedin.svg" className="mr-3" alt="Email" />
              <p>/brenolemos</p>
            </div>
            <div className="item mb-4">
              <img src="img/github.svg" className="mr-3" alt="Email" />
              <p>/brennolemos</p>
            </div>

            <div className="item mb-4">
              <img src="img/behance.svg" className="mr-3" alt="Email" />
              <p>/brenolemos</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
