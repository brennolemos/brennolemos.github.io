import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel } from 'rsuite';

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
  link?: string;
};

type Tags = {
  name: string;
};

const PortfolioList = (props: PortfolioListProps) => {
  const { t } = useTranslation();

  return (
    <div className="row justify-content-center">
      {props.jobs.map((job, index) => {
        if (index < 3)
          return (
            <div className="col-lg-4 col-md-6 " key={job.id}>
              <Panel shaded bodyFill>
                <img src={job.image} alt={job.name} />

                <Panel>
                  <S.Title>{job.name}</S.Title>
                  <div className="mb-3">
                    {job.tags.map((tag) => (
                      <Badge key={tag.name} text={tag.name} />
                    ))}
                  </div>

                  <p>
                    <div className="text-center mt-3">
                      {job.link ? (
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          {t('home.see_more')}
                        </a>
                      ) : (
                        <button
                          onClick={() =>
                            props.onHandleModal({
                              ...job,
                              description: t(
                                `portfolio.list.${index}.description`,
                              ),
                            })
                          }
                          className="btn"
                        >
                          {t('home.see_more')}
                        </button>
                      )}
                    </div>
                  </p>
                </Panel>
              </Panel>
            </div>
          );
        else return null;
      })}
    </div>
  );
};

export default PortfolioList;
