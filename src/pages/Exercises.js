import React from 'react';

import Welcome from '../components/Welcome';
import ExercisesList from '../components/ExerciseList';
import FloatingAddButton from '../components/FloatingAddButton';
import CustomizedSnackbar from '../components/CustomizedSnackbar';
import Grid from '@material-ui/core/Grid';

const Exercises = ({Data, actionType}) => (
  <>
    <Welcome username=''/>
    <Grid container spacing={1} style={{padding: '0 2%'}}>
      <ExercisesList Data={Data} />
           
    </Grid>
    <FloatingAddButton/>
    { actionType && <CustomizedSnackbar actionType={actionType} /> }
  </>
)

export default Exercises;
