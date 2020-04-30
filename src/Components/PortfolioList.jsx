import React from "react";
import "./portfolioList.css";

const PortfolioList = (props) => {
  return (
    <div className="row">
      {props.jobs.map((job) => (
        <div className="col-md-4" key={job.id}>
          <div className="portfolio-item">
            <img src={job.image} alt="Delfos IM" />
            <div className="item-info media-body">
              <h3>{job.name}</h3>
              <div className="my-3">
                {job.tags.map((tag) => (
                  <span key={tag.name} className="badge badge-secondary">
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="text-center">
                <a href="#" className="btn-live">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
