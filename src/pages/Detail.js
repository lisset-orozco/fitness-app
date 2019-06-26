import React from 'react';
import url from '../config';
import { useFetch } from '../hooks/useFetch';
import FatalError from '../pages/500';
import Card from '../components/Card';
import Buttons from '../components/Buttons';

const Detail = (props) => {
  const { Data, hasError } = useFetch(`${url}/exercises/${props.location.exerciseId}`);
  const exercise = {...Data}

  return(
    hasError
    ?
      <FatalError />
    :
    <>
      <div className="ExerciseNew_Card_Space">
        <Card {...exercise} />
      </div>
      <br/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Buttons id={props.location.exerciseId} />
      </div>
      
    </>
  )
}
;

export default Detail;
