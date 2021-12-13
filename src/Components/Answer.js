import React from 'react';
import styles from './Answer.module.css';

const onClickHandler = () => {
  console.log('Button Works');
  alert('Button Works');
};

const Answer = (props) => {
  return (
    <div className={styles.answer}>
      <button type='button' onClick={onClickHandler}>
        <h1>{props.value}</h1>
      </button>
      <h3>{props.answer}</h3>
    </div>
  );
};

export default Answer;
