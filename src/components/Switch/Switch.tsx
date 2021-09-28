import React from 'react';

import * as S from './styles';

type SwitchProps = {
  toggleTheme: () => void;
  checked: boolean;
};

const Switch = ({ toggleTheme, checked }: SwitchProps) => {
  return (
    <S.Switch
      type="checkbox"
      checked={checked}
      onChange={() => {
        toggleTheme();
      }}
      name="checkbox"
    />
  );
};

export default Switch;
