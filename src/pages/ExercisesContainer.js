import React from 'react';

import Loading from '../components/Loading';
import FatalError from '../pages/500';
import Exercises from './Exercises';
import httpClient from '../services/AxiosClient';
import NoResults from './NoResults';

const ExercisesContainer = (props) => {
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
        Data.length === 0
        ?
        <NoResults/>
        :
        <Exercises Data={Data} actionType={props.location.actionType}/>
  )
}

export default ExercisesContainer;
