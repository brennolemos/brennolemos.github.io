import React from 'react';

import * as S from './Skills-styles';

type SkillsProps = {
  skills: Skill[];
};

type Skill = {
  id: string;
  icon: string;
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="row my-4">
      {skills.map((skill) => (
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
