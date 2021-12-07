import React from 'react';
import styles from './QuestionSection.module.css';
import Question from './Question';
import Answer from './Answer';

const QuestionSection = (props) => {
  const DUMMY_DATA = {
    question: 'In 1768, Captain James Cook set out to explore which ocean?',
    answer_a: 'Pacific Ocean',
    answer_b: 'Atlantic Ocean',
    answer_c: 'Indian Ocean',
    answer_d: 'Arctic Ocean',
  };
  return (
    <div className={styles.questionSection}>
      <Question className={styles.question} question={DUMMY_DATA} />
      <Answer
        className={styles.topchild}
        answer={DUMMY_DATA.answer_a}
        value={'A'}
      />
      <Answer
        className={styles.topchild}
        answer={DUMMY_DATA.answer_b}
        value={'B'}
      />
      <Answer
        className={styles.bottomchild}
        answer={DUMMY_DATA.answer_c}
        value={'C'}
      />
      <Answer
        className={styles.bottomchild}
        answer={DUMMY_DATA.answer_d}
        value={'D'}
      />
    </div>
  );
};

export default QuestionSection;
