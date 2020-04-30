import React from "react";
import "./skills.css";

const Skills = (props) => {
  return (
    <div className="row my-4">
      {props.skills.map((skill) => (
        <div key={skill.id} className="col-md-3 mb-4">
          <div className="icon-skill mx-auto">
            <i className={skill.icon}></i>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Skills;
