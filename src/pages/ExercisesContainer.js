import React from 'react';

import Loading from '../components/Loading';
import FatalError from '../pages/500';
import Exercises from './Exercises';

// fake data
import Data from '../faker/exercises.json'

class ExercisesContainer extends React.Component {
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
        <Exercises Data={this.state.Data}/>
      </>
  )
}

export default ExercisesContainer;
