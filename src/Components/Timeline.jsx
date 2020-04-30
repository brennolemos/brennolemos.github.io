import React from "react";
import "./timeline.css";

const Timeline = (props) => {
  return (
    <>
      <h2>{props.infos.titulo}</h2>
      <ul className="timeline">
        {props.infos.list.map((item) => (
          <li key={item.id}>
            <div className="item">
              <span className="imagem">
                <i className={props.infos.icon}></i>
              </span>
              <div className="infos">
                <span className="tempo">{item.periodo}</span>
                <h3>{item.cargo}</h3>
                <span className="local">{item.titulo}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Timeline;
