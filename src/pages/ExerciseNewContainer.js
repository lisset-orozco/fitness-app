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

  const validate = (title, description) => {
    // true means invalid, so our conditions got reversed
    return {
      title: title.trim().length === 0,
      description: description.trim().length === 0
    };
  }

  const canBeSubmitted = () => {
    const errors = validate(info.form.title, info.form.description);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  const handleSubmit = async (e) => {
    if (!canBeSubmitted()) {
      e.preventDefault();

      // v = document.getElementsByName('title')[0]
      alert(`Title or Description are empty.`);
      return;
    }

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
                    window.location = '/exercise'
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
