import React, { useState } from 'react';

import '../components/styles/ExerciseNew.css';
import ExerciseNew from './ExerciseNew';
import FatalError from '../pages/500';
import url from '../config';
import axios from 'axios'

const ExerciseNewContainer = (props) => {
  const state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    } ,
    loading: true ? 'f' : false,
    hasError: false
  }

  const [info, setInfo] = useState({...state})

  const handleChange = e => (
    setInfo({
      ...info,
      form: {
        ...info.form,
        [e.target.name]: e.target.value
      } 
    })
  )

  const handleSubmit = async (e) => {
    setInfo({
      ...info,
      loading: true
    });

    e.preventDefault()
    await axios.post(`${url}/exercises`, {...info.form})
    .then( (res) => {
      setInfo({
        ...info,
        loading: false
      });
      props.history.push('/exercise');
    })
    .catch( error => {
      setInfo({
        ...info,
        loading: false,
        hasError: true
      });
    });
  }

  return(
    info.hasError
    ?
      <FatalError />
    :
      <ExerciseNew
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={props.exercise || info.form}
      />
  )
}

export default ExerciseNewContainer;
