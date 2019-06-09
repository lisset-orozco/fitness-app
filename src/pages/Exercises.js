import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';

// fake data
import Data from '../faker/exercises.json'

class Exercises extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Data };
  }

  render = () => (
    <div>
      <Welcome username='Alexandra' />
      <ExercisesList Data={this.state.Data}/>
    </div>
  )
}

export default Exercises;
