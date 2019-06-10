import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import Add from '../components/Add';

// fake data
import Data from '../faker/exercises.json'

class Exercises extends React.Component {
  state = { Data };

  render = () => (
    <div>
      <Welcome username='Alexandra' />
      <ExercisesList Data={this.state.Data}/>
      <Add />
    </div>
  )
}

export default Exercises;
