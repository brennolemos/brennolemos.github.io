import React from 'react';
import { Modal as RModal } from 'rsuite';

import * as S from './styles'
import Badge from '../Badge';

type ModalProps = {
  infos: ModalInfos;
  setModal: (modalinfos: ModalInfos | null) => void;
  closeModal: (event: MouseEvent) => void;
  open: boolean;
  handleClose: () => void
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
    <RModal overflow open={props.open} onClose={props.handleClose}>
      <RModal.Header>
        <RModal.Title as={S.Title}>{props.infos.name}</RModal.Title>
      </RModal.Header>

      <RModal.Body as={S.Content}>
          <S.Image src={props.infos.imageXg} alt="" />

        {props.infos.tags.map((tag) => (
          <Badge key={tag.name} text={tag.name} />
        ))}

        <p>{props.infos.description}</p>
      </RModal.Body>
    </RModal >
  );
};

export default Modal;
