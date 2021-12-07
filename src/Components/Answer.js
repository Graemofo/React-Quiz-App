import React from 'react';
import styles from './Answer.module.css';

const Answer = (props) => {
  return (
    <div className={styles.answer}>
      <button>
        <h1>{props.value}</h1>
      </button>
      <h3>{props.answer}</h3>
    </div>
  );
};

export default Answer;
