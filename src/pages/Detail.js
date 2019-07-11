import React from 'react';
import FatalError from '../pages/500';
import Card from '../components/Card';
import Buttons from '../components/Buttons';
import httpClient from '../services/AxiosClient';
import CustomizedSnackbar from '../components/CustomizedSnackbar';

const Detail = (props) => {
  const { Data, hasError } = httpClient.get(props.location.state);
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
        <Buttons id={props.location.state} />
      </div>
      { props.location.actionType && <CustomizedSnackbar actionType={props.location.actionType} />}
    </>
  )
}
;

export default Detail;
