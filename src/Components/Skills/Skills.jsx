import React from 'react';

import * as S from './styles';

const Skills = (props) => {
  return (
    <div className="row my-4">
      {props.skills.map((skill) => (
        <div key={skill.id} className="col-md-3 mb-4">
          <S.IconContainer>
            <i className={skill.icon}></i>
          </S.IconContainer>
        </div>
      ))}
    </div>
  );
};

export default Skills;
