import React, { useState } from 'react';

import '../components/styles/ExerciseNew.css';
import ExerciseNew from './ExerciseNew';
import FatalError from '../pages/500';
import url from '../config';
import httpClient from '../services/AxiosClient'

const ExerciseNewContainer = (props) => {
  const state = {
    form: 
      { ...props.exercise ? 
        {...props.exercise} : 
        {
          title: '',
          description: '',
          img: '',
          leftColor: '',
          rightColor: ''
          }
      } ,
    loading: false,
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

    info.form.id
    ?
      httpClient.put(info.form.id, {...info.form})
                .then(res => {
                  if (res.success) {
                    setInfo({
                        ...info,
                        loading: false
                    })
                    
                    console.log(window.location)
                    window.location = '/exercise'
                  }
                })
    :
      httpClient.post(`${url}/exercises`, {...info.form})
                .then(res => {
                  if (res.success) {
                    setInfo({
                        ...info,
                        loading: false
                    });
                    props.history.push('/exercise');
                  }
                })
  }

  return(
    info.hasError
    ?
      <FatalError />
    :
      <ExerciseNew
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={info.form}
      />
  )
}

export default ExerciseNewContainer;
