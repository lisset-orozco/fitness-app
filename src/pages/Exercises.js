import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import { Grid, Row } from 'react-flexbox-grid';
import FloatingAddButton from '../components/FloatingAddButton';
import CustomizedSnackbar from '../components/CustomizedSnackbar';

const Exercises = ({Data, actionType}) => (
  <>
    <Welcome username=''/>

    <Grid responsive="true">
        <Row>
          <ExercisesList Data={Data}/>
        </Row>
    </Grid>
    <FloatingAddButton/>
    { actionType && <CustomizedSnackbar actionType={actionType} /> }
  </>
)

export default Exercises;
