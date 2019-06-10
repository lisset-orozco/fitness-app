import React from 'react';

const handleClick = () => console.log('Clicked');

const ExerciseNew = () => (
  <button onClick={ () => handleClick() }>
    Send
  </button>
);

export default ExerciseNew;
