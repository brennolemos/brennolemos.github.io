import React from 'react';

import * as S from './Badge-styles';

type BadgeProps = {
  text: string;
};

const Badge = ({ text }: BadgeProps) => {
  return <S.Badge className="badge badge-secondary">{text}</S.Badge>;
};

export default Badge;
