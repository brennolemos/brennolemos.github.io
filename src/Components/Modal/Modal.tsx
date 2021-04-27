import React from 'react';
import './modal.css';

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
    <section className="modal-custom" onClick={() => props.closeModal}>
      <div className="modal-custom__container">
        <div className="modal-custom__img">
          <img src={props.infos.imageXg} alt="" />
        </div>
        <div className="modal-custom__infos">
          <button
            className="modal-custom__close"
            onClick={() => {
              props.setModal(null);
            }}
          >
            <i className="far fa-2x fa-times-circle"></i>
          </button>

          <h2 className="modal-custom__title">{props.infos.name}</h2>
          {props.infos.tags.map((tag) => (
            <span key={tag.name} className="badge badge-secondary">
              {tag.name}
            </span>
          ))}
          <p className="modal-custom__content">{props.infos.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
