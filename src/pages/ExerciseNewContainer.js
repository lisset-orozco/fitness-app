import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import '../components/styles/ExerciseNew.css';
import ExerciseNew from './ExerciseNew';
import FatalError from '../pages/500';
import httpClient from '../services/AxiosClient';

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
    }, 
    redirectHome: false,
    redirectDetail: false
  }

  const [info, setInfo] = useState({...state})

  const handleChange = e => {
    setInfo({
      ...info,
      form: {
        ...info.form,
        [e.target.name]: e.target.value
      },
      warning: {...state.warning}
    })
  }

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

      return '';
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
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    if (isDisabled)
      setWarning(errors)

    return !isDisabled;
  }

  const handleSubmit = async (e) => {
    if (!canBeSubmitted()) {
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
                        loading: false,
                        redirectDetail: true
                    })
                  }
                })
    :
      httpClient.post({...info.form})
                .then(res => {
                  if (res.success) {
                    setInfo({
                        ...info,
                        form: {...res.form},
                        loading: false,
                        redirectHome: true
                    });
                  }
                })
  }

  return(
    info.hasError
    ?
      <FatalError />
    :
      info.redirectHome
      ?
        // <Redirect to='/exercise'/>
        <Redirect to={{
          pathname: '/exercise/detail',
          exerciseId: info.form.id,
          actionType: 'created'
        }} />
      :
        info.redirectDetail
        ?
          <Redirect to={{
            pathname: '/exercise/detail',
            exerciseId: info.form.id,
            actionType: 'updated'
          }} />
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
