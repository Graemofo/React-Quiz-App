import React, { useState, useRef } from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  const formRef = useRef();
  const [teamName, setTeamName] = useState('');
  const [category, setCategory] = useState('General Knowledge');
  const [raceTo, setRaceTo] = useState('5');

  const teamNameHandler = (event) => {
    setTeamName(event.target.value);
    console.log(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };
  const raceToHandler = (event) => {
    setRaceTo(event.target.value);
    console.log(event.target.value);
  };
  const onSubmitTeamHandler = (event) => {
    event.preventDefault();
    console.log('onSubmitTeam Hit', teamName);
    if (teamName.length === 0) {
      alert('Team Name needs to be added!');
    } else {
      props.sendTeam(teamName);
      setTeamName('');
      formRef.current.reset();
    }
  };
  const onSubmitGameHandler = (event) => {
    event.preventDefault();
    console.log('onGameSubmit Hit', category, raceTo);
  };

  return (
    <form ref={formRef} className={styles.header}>
      <label htmlFor='team-name'>
        <h2>Team Name</h2>
      </label>
      <input id='team-name' type='text' onChange={teamNameHandler} />
      <button type='submit' onClick={onSubmitTeamHandler}>
        Add Team
      </button>
      <label htmlFor='team-category'>
        <h2>Category</h2>
      </label>
      <select id='category' onChange={categoryHandler}>
        <option value='General Knowledge'>General Knowledge</option>
        <option value='Science'>Science</option>
        <option value='Art'>Art</option>
        <option value='Math'>Math</option>
      </select>
      <label htmlFor='format'>
        <h2>Race to</h2>
      </label>
      <select id='format' onChange={raceToHandler}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
      </select>
      <button type='submit' onClick={onSubmitGameHandler}>
        Start Game
      </button>
    </form>
  );
};

export default Header;
