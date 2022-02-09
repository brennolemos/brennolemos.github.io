import React from 'react';
import { Timeline } from 'rsuite';

import * as S from './styles';

type Place = {
  id: string;
  periodo: string;
  ocupacao: string;
  titulo: string;
};

type TimelineProps = {
  infos: {
    title: string;
    icon: string;
    list: Place[];
  };
};

export default ({ infos }: TimelineProps) => {
  return (
    <>
      <h2>{infos.title}</h2>

      <Timeline endless>
        {infos.list.map((item) => (
          <Timeline.Item key={item.id}>
            <S.Period>{item.periodo}</S.Period>
            <S.Title>{item.ocupacao}</S.Title>
            <S.Place>{item.titulo}</S.Place>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};
