import React from 'react';
import { Container, Grid, Row, Col } from 'rsuite';

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
    <Grid className="my-4">
      <Row gutter={16}>
        {skills.map((skill) => (
          <Col key={skill.id} xs={12} md={8} lg={6} className=" mb-4">
            <S.IconContainer>
              <i className={skill.icon}></i>
            </S.IconContainer>
          </Col>
        ))}
      </Row>
    </Grid>
  );
};

export default Skills;
