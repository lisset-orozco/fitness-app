import React, { useState } from 'react';

import '../components/styles/ExerciseNew.css';
import ExerciseNew from './ExerciseNew';
import FatalError from '../pages/500';

const ExerciseNewContainer = (props) => {
  const state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    },
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
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info.form)
      }

      await fetch('http://localhost:8000/api/exercises', config);
      // let json = await res.json();

      setInfo({
        ...info,
        loading: false
      });

      props.history.push('/exercise');
    } catch (error) {
      setInfo({
        ...info,
        loading: false,
        hasError: true
      });
    }
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
