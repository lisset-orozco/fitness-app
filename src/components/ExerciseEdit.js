import React from 'react';

import httpClient from '../services/AxiosClient'
import Loading from '../components/Loading';
import FatalError from '../pages/500';

import ExerciseNewContainer from '../pages/ExerciseNewContainer'

const ExerciseEdit = (props) => {
  const { Data, loading, hasError } = httpClient.get(props.location.id)

  return(
    hasError 
    ?
    <FatalError/>
    :
    loading
      ?
      <Loading />
      :
        <ExerciseNewContainer {...Data}/>
  )
}

export default ExerciseEdit;
