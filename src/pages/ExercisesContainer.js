import React from 'react';

import Loading from '../components/Loading';
import FatalError from '../pages/500';
import Exercises from './Exercises';
import httpClient from '../services/AxiosClient'

const ExercisesContainer = () => {
  const { Data, loading, hasError } = httpClient.getAll();

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
