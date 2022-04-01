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

const QuestionSection = (props) => {
  const [questions, setQuestions] = useState([{}]);
  const [counter, setCounter] = useState(0);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    if (props === null) {
      console.log('Props Null');
    }
    if (props !== null) {
      console.log('Props', props);

      //setQuestions(props.questions.results);
      // setCounter(0);
      // if (questions[counter] != null) {
      // setQuestion(questions[counter]?.question.toString());
      // console.log(props.questions.results[counter].question);
      //  }
    }
    // if (props.questions.results) {
    // console.log('Questions', questions);
    // console.log('Question', question);
    // console.log('Counter', counter);
    //  }
    // console.log('QuestionSection array: ', questions);
  }, [props]);

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
