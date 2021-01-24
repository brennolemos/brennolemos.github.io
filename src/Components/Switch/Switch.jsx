import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ toggleTheme, checked }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          toggleTheme();
        }}
        name="checkbox"
        className={styles.switch}
      />
    </div>
  );
};

export default Switch;
