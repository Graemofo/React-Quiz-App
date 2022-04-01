import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import TeamSection from './Components/TeamSection';
import Logo from './Components/Logo';
import QuestionSection from './Components/QuestionSection';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//let jsondata = [];

function App() {
  const [team, setTeam] = useState([]);
  // eslint-disable-next-line
  const [category, setCategory] = useState('9');
  const [gameReady, setGameReady] = useState(false);
  const [teamReady, setTeamReady] = useState(false);
  const [questionUrl, setQuestionUrl] = useState(
    'https://opentdb.com/api.php?amount=50&category=9'
  );
  const [questions, setQuestions] = React.useState([]);

  useEffect(() => {
    if (gameReady) {
      console.log('Game Ready');
      fetch(questionUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log('Data ', data);
          // console.log('Question:  ' + data.results[0].question);
          const questionArray = data.results;
          // console.log('Array ', questionArray);
          setQuestions(questionArray);
          // console.log('Questions array ', questions);
        });
    } else {
      console.log('Game is not ready');
    }
  }, [gameReady, questionUrl]);

  const questionReducer = function (state = [], action) {
    switch (action.type) {
      case 'ADD_QUESTIONS':
        return state + 1;
      default:
        return state;
    }
  };

  let store = createStore(questionReducer);

  const getTeamNameHandler = (teamName) => {
    setTeam((teamArray) => [...teamArray, teamName]);
    setTeamReady(true);
    console.log('getTeamNameHandler was hit', team);
  };
  const startGameHandler = (category, raceTo, ready) => {
    setCategory(category);
    setQuestionUrl(
      'https://opentdb.com/api.php?amount=50&category=' + category
    );

    console.log('startGame Hit ', category, raceTo, ready);
    setGameReady(true);
  };

  return (
    <>
      <Provider store={store}>
        <Logo />
        <Header sendTeam={getTeamNameHandler} startGame={startGameHandler} />
        {teamReady && <TeamSection team={team} />}
        {gameReady && <QuestionSection questions={questions} />}
      </Provider>
    </>
  );
}

export default App;
