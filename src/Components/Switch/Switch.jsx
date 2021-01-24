import React from 'react';
import styles from './Switch.module.css';

const Switch = () => {
  return (
    <div class={styles.wrapper}>
      <input type="checkbox" name="checkbox" class={styles.switch} />
    </div>
  );
};

export default Switch;
