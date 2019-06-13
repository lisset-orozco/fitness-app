import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import Add from '../components/Add';
import Loading from '../components/Loading';
import FatalError from '../pages/500';

// fake data
import Data from '../faker/exercises.json'

class Exercises extends React.Component {
  state = { Data: [], 
            hasError: false,
            loading: true };

  fetchExercises = async () => {
    let res = await fetch('http://localhost:8000/api/exercises');
    let data = await res.json();

    this.setState({
      Data: data,
      loading: false
    })
    console.log(data)
  }

  async componentDidMount() {
    try {
      await this.fetchExercises()
    } catch (e) {
      this.setState({ 
        hasError: true,
        loading: false
      });
    }
  }

  render = () => (
    this.state.hasError 
    ?
    <FatalError/>
    :
    this.state.loading
      ?
      <Loading />
      :
      <>
        <Welcome username='Alexandra' />
        <ExercisesList Data={this.state.Data}/>
        <Add />
      </>
  )
}

export default Exercises;
