import React from "react";
import { Book, Briefcase } from "@styled-icons/evaicons-solid";

import * as S from "./styles";

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
      <S.Timeline>
        {infos.list.map((item) => (
          <S.Item key={item.id}>
            <S.Icon>
              {infos.icon === "book" ? (
                <Book size={24} />
              ) : (
                <Briefcase size={24} />
              )}
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
