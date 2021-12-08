import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TeamSection from './Components/TeamSection';
import Logo from './Components/Logo';
import QuestionSection from './Components/QuestionSection';

function App() {
  const [team, setTeam] = useState([]);
  const [gameReady, setGameReady] = useState(false);
  const [teamReady, setTeamReady] = useState(false);

  const getTeamNameHandler = (teamName) => {
    setTeam((teamArray) => [...teamArray, teamName]);
    setTeamReady(true);
    console.log('getTeamNameHandler was hit', team);
  };
  const startGameHandler = (category, raceTo, ready) => {
    console.log('startGame Hit ', category, raceTo, ready);
    setGameReady(true);
  };

  return (
    <>
      <Logo />
      <Header sendTeam={getTeamNameHandler} startGame={startGameHandler} />

      {teamReady && <TeamSection team={team} />}
      {gameReady && <QuestionSection />}
    </>
  );
}

export default App;
