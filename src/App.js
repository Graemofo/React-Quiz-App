import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TeamSection from './Components/TeamSection';
import Logo from './Components/Logo';

function App() {
  const [team, setTeam] = useState([]);

  const getTeamNameHandler = (teamName) => {
    setTeam((teamArray) => [...teamArray, teamName]);
    console.log('getTeamNameHandler was hit', team);
  };

  return (
    <>
      <Logo />
      <Header sendTeam={getTeamNameHandler} />
      <TeamSection team={team} />
    </>
  );
}

export default App;
