import React from 'react';
import TeamRow from './TeamRow';
import styles from './TeamSection.module.css';
const TeamSection = (props) => {
  return (
    <div className={styles.teamSection}>
      {props.team.map((teamName, index) => (
        <TeamRow key={index} team={teamName} />
      ))}
    </div>
  );
};

export default TeamSection;
