import React from 'react';
import ExerciseNewContainer from '../pages/ExerciseNewContainer';
import url from '../config';
import { useFetch } from '../hooks/useFetch';
import FatalError from '../pages/500';

const Detail = (props) => {
  const { Data, hasError } = useFetch(`${url}/exercises/${props.location.state}`);
  const exercise = {...Data}

  return(
    hasError
    ?
      <FatalError />
    :
      <ExerciseNewContainer {...exercise} />
  )
}
;

export default Detail;
