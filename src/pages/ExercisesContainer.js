import React from 'react';

import Loading from '../components/Loading';
import FatalError from '../pages/500';
import Exercises from './Exercises';
import useFetch from '../hooks/useFetch';

// fake data
// import Data from '../faker/exercises.json'

const ExercisesContainer = () => {
  const { Data, loading, hasError } = useFetch('http://localhost:8000/api/exercises');

  return(
    hasError 
    ?
    <FatalError/>
    :
    loading
      ?
      <Loading />
      :
        <Exercises Data={Data}/>
  )
}

export default ExercisesContainer;
