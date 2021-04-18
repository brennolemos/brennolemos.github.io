import React from 'react';

import * as S from './styles';

type Place = {
  id: string;
  periodo: string;
  ocupacao: string;
  titulo: string;
};

type TimelineProps = {
  infos: {
    titulo: string;
    icon: string;
    list: Place[];
  };
};

export default ({ infos }: TimelineProps) => {
  return (
    <>
      <h2>{infos.titulo}</h2>
      <S.Timeline>
        {infos.list.map((item) => (
          <S.Item key={item.id}>
            <S.Icon>
              <i className={infos.icon}></i>
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
