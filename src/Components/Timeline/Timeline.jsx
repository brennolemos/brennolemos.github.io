import React from 'react';

import * as S from './styles';

export default (props) => {
  return (
    <>
      <h2>{props.infos.titulo}</h2>
      <S.Timeline>
        {props.infos.list.map((item) => (
          <S.Item key={item.id}>
            <S.Icon>
              <i className={props.infos.icon}></i>
            </S.Icon>
            <div className="timeline__infos">
              <S.Period>{item.periodo}</S.Period>
              <S.Title>{item.ocupacao}</S.Title>
              <S.Place>{item.titulo}</S.Place>
            </div>
          </S.Item>
        ))}
      </S.Timeline>
    </>
  );
};
