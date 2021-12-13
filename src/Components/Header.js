import React, { useState, useRef } from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  const formRef = useRef();
  const [teamName, setTeamName] = useState('');
  const [category, setCategory] = useState('9');
  const [raceTo, setRaceTo] = useState('5');

  const teamNameHandler = (event) => {
    setTeamName(event.target.value);
    console.log(event.target.value);
  };

  const categoryHandler = (event) => {
    const select = event.target;
    const id = select.children[select.selectedIndex].id;
    setCategory(id);
    console.log('categoryHandler', event.target.value, id);
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
    props.startGame(category, raceTo, true);
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
        <option id='9' value='9'>
          General Knowledge
        </option>
        <option id='10' value='10'>
          Entertainment: Books
        </option>
        <option id='11' value='11'>
          Entertainment: Film
        </option>
        <option id='12' value='12'>
          Entertainment: Music
        </option>
        <option id='14' value='14'>
          Entertainment: Television
        </option>
        <option id='15' value='15'>
          Entertainment: Video Games
        </option>
        <option id='16' value='16'>
          Entertainment: Board Games
        </option>
        <option id='17' value='17'>
          Science & Nature
        </option>
        <option id='18' value='18'>
          Science: Computers
        </option>
        <option id='20' value='20'>
          Mythology
        </option>
        <option id='21' value='21'>
          Sports
        </option>
        <option id='22' value='22'>
          Geography
        </option>
        <option id='23' value='23'>
          History
        </option>
        <option id='24' value='24'>
          Politics
        </option>
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
