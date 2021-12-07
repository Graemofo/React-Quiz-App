import React, { useState } from 'react';
import styles from './TeamRow.module.css';

const TeamRow = (props) => {
  const [style, setStyle] = useState('teamrow button ');
  const fiftyFifty = () => {
    alert('50 50 called');
    setStyle('const2');
  };
  return (
    <div className={styles.teamrow}>
      <button className={style} type='button' onClick={fiftyFifty}>
        {' '}
        50/50
      </button>
      <h1 className={styles.teamrow.name}>{props.team}</h1>
      <h1>Score: 0</h1>
    </div>
  );
};

export default TeamRow;
