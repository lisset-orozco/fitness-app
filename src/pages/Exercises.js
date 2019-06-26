import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import Add from '../components/Add';
import { Grid, Row } from 'react-flexbox-grid';

const Exercises = ({Data}) => (
  <>
    <Welcome username='Alexandra' />

    <Grid fluid>
        <Row>
          <ExercisesList Data={Data}/>
        </Row>
      </Grid>
    <Add />
  </>
)

export default Exercises;
