import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import link from './styles/Link.css.js';
import Grid from '@material-ui/core/Grid';

const ExerciseList = ({Data}) => (
  <>
    {
      Data.map((exercise) =>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={exercise.id} >
          <Link //to="/exercise/detail" key={exercise.id} {...exercise}
            to={{
              pathname: '/exercise/detail',
              state: exercise.id
            }}
            key={exercise.id}
            style={link.decoration}
          >
              <Card
                {...exercise}
                key={exercise.id}
              />
          </Link>
        </Grid>
      )
    }
  </>
)

export default ExerciseList;
