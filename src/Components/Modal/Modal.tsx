import React from 'react';
import * as S from './styles';

type ModalProps = {
  infos: ModalInfos;
  setModal: (modalinfos: ModalInfos | null) => void;
  closeModal: (event: MouseEvent) => void;
};

type ModalInfos = {
  name: string;
  image: string;
  tags: Tags[];
  description?: string;
  imageXg?: string;
};

type Tags = {
  name: string;
};

const Modal = (props: ModalProps) => {
  return (
    <S.Modal onClick={() => props.closeModal}>
      <S.Container>
        <S.Image>
          <img src={props.infos.imageXg} alt="" />
        </S.Image>
        <S.Infos>
          <S.Close
            onClick={() => {
              props.setModal(null);
            }}
          >
            <i className="far fa-2x fa-times-circle"></i>
          </S.Close>

          <S.Title>{props.infos.name}</S.Title>
          {props.infos.tags.map((tag) => (
            <span key={tag.name} className="badge badge-secondary">
              {tag.name}
            </span>
          ))}
          <S.Content>{props.infos.description}</S.Content>
        </S.Infos>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
