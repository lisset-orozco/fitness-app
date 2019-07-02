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
    hasError: false,
    warning: { 
      titleError: '',
      descriptionError: ''
    }
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

  const setWarning = (errors) => {
    let titleError = ''
    let descriptionError = ''

    Object.keys(errors).map(x => {
      if(errors[x] && x === 'title')
        titleError = 'Title cannot be blank';

      if(errors[x] && x === 'description')
        descriptionError = 'Description cannot be blank';
    });

      setInfo({
        ...info,
        form: {
          ...info.form,
          title: info.form.title.trim(),
          description: info.form.description.trim()
        },
        warning: {
          titleError: titleError,
          descriptionError: descriptionError
        } 
      })
  }

  const canBeSubmitted = () => {
    const errors = validate(info.form.title, info.form.description);
    setWarning(errors)
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  const handleSubmit = async (e) => {
    if (!canBeSubmitted()) {
      console.log({...info.warning})
      e.preventDefault();
      return;
    }

    setInfo({
      ...info,
      form: {
        ...info.form,
        title: info.form.title.trim(),
        description: info.form.description.trim()
      },
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
        warning={info.warning}
      />
  )
}

export default ExerciseNewContainer;
