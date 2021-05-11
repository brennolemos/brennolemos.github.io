import React from 'react';

import Badge from '../Badge';
import * as S from './styles';

type PortfolioListProps = {
  jobs: Jobs[];
  onHandleModal: (job: ModalProps) => void;
};

type ModalProps = {
  name: string;
  image: string;
  tags: Tags[];
  description?: string;
  imageXg?: string;
};

type Jobs = {
  id: string;
  image: string;
  name: string;
  tags: Tags[];
};

type Tags = {
  name: string;
};

const PortfolioList = (props: PortfolioListProps) => {
  return (
    <div className="row justify-content-center">
      {props.jobs.map((job) => (
        <div className="col-lg-4 col-md-6 d-flex" key={job.id}>
          <S.Item>
            <img src={job.image} alt="Delfos IM" />
            <div className="item-info media-body">
              <S.Title>{job.name}</S.Title>
              <div className="my-3">
                {job.tags.map((tag) => (
                  <Badge key={tag.name} text={tag.name} />
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => props.onHandleModal(job)}
                  className="btn"
                >
                  Ver Mais
                </button>
              </div>
            </div>
          </S.Item>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
