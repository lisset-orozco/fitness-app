import React, { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import FatalError from '../pages/500';
import Exercises from './Exercises';

// fake data
// import Data from '../faker/exercises.json'

const ExercisesContainer = () => {
  const [Data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchExercises = async () => {
    await fetch('http://localhost:8000/api/exercises')
          .then( async(res) => {
            setData(await res.json());
            setLoading(false);
            console.log(res);
          })
          .catch( error => {
            setError(true);
            setLoading(false);
          });
  }           

  useEffect(() => {
    fetchExercises();
  }, []);

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
