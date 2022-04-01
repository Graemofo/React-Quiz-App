import React from 'react';

const Question = (props) => {
  return (
    <div>
      <h1>{props.question.question}</h1>
      <h1>{props.ques}</h1>
    </div>
  );
};

export default Question;
