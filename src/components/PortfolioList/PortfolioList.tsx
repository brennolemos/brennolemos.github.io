import React from "react";
import { useTranslation } from "react-i18next";

import Badge from "../Badge";
import * as S from "./styles";

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
  const { t } = useTranslation();

  return (
    <div className="row justify-content-center">
      {props.jobs.map((job, index) => {
        if (index < 3)
          return (
            <div className="col-lg-4 col-md-6 d-flex" key={job.id}>
              <S.Item>
                <img src={job.image} alt={job.name} />
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
                      {t("home.see_more")}
                    </button>
                  </div>
                </div>
              </S.Item>
            </div>
          );
        else return null;
      })}
    </div>
  );
};

export default PortfolioList;
