import React from "react";
import "./timeline.css";

const Timeline = (props) => {
  return (
    <>
      <h2>{props.infos.titulo}</h2>
      <ul className="timeline">
        {props.infos.list.map((item) => (
          <li key={item.id}>
            <div className="timeline__item">
              <span className="timeline__icon">
                <i className={props.infos.icon}></i>
              </span>
              <div className="timeline__infos">
                <span className="timeline__period">{item.periodo}</span>
                <h3 className="timeline__title">{item.ocupacao}</h3>
                <span className="timeline__place">{item.titulo}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Timeline;
