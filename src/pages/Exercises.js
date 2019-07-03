import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import { Grid, Row } from 'react-flexbox-grid';
import FloatingAddButton from '../components/FloatingAddButton';

const Exercises = ({Data}) => (
  <>
    <Welcome username=''/>

    <Grid responsive="true">
        <Row>
          <ExercisesList Data={Data}/>
        </Row>
    </Grid>
    <FloatingAddButton/>
  </>
)

export default Exercises;
