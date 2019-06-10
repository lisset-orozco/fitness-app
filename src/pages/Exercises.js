import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import Add from '../components/Add';

// fake data
import Data from '../faker/exercises.json'

class Exercises extends React.Component {
  state = { Data: [], hasError: false };

  async componentDidMount() {
    
    try {
        await this.fetchExercises() 
      } catch (e) {
        console.log('Error')
        this.setState({ hasError: true });
      }
  }

  fetchExercises = async () => {
    let res = await fetch('http://localhost:8000/api/exercises');
    let data = await res.json();

    this.setState({
      Data: data
    })
    console.log(data)
  }

  render = () => (
    this.state.hasError 
    ?
      <h1>Something went wrong.</h1>
    :
      <div>
        <Welcome username='Alexandra' />
        <ExercisesList Data={this.state.Data}/>
        <Add />
      </div>
  )
}

export default Exercises;
