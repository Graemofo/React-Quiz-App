import React, { useState, useEffect } from 'react';
import styles from './QuestionSection.module.css';
import Question from './Question';
import Answer from './Answer';

const DUMMY_DATA = {
  question: 'In 1768, Captain James Cook set out to explore which ocean?',
  answer_a: 'Pacific Ocean',
  answer_b: 'Atlantic Ocean',
  answer_c: 'Indian Ocean',
  answer_d: 'Arctic Ocean',
};

const newArray = [
  {
    name: 'Grame',
    age: 30,
  },
  {
    name: 'Billy',
    age: 40,
  },
  {
    name: 'Zola',
    age: 50,
  },
];

const QuestionSection = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(1);
  // const [question, setQuestion] = useState('');

  //useEffect(() => {}, [counter]);

  //console.log('Question Section Hit', props.questions.results);
  console.log(newArray);
  console.log(newArray[1].name);
  console.log(props.questions.results);

  return (
    <div className={styles.questionSection}>
      <Question question={DUMMY_DATA} />
      <Answer answer={DUMMY_DATA.answer_a} value={'A'} />
      <Answer answer={DUMMY_DATA.answer_b} value={'B'} />
      <Answer answer={DUMMY_DATA.answer_c} value={'C'} />
      <Answer answer={DUMMY_DATA.answer_d} value={'D'} />
    </div>
  );
};

export default QuestionSection;
