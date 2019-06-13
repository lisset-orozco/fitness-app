import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import Add from '../components/Add';

const Exercises = ({Data}) => (
  <>
    <Welcome username='Alexandra' />
    <ExercisesList Data={Data}/>
    <Add />
  </>
)

export default Exercises;