import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

const ExerciseList = ({Data}) => (
  <>
    {
      Data.map((exercise) =>
        <Link //to="/exercise/detail" key={exercise.id} {...exercise}
          to={{
            pathname: '/exercise/detail',
            exerciseId: exercise.id
          }}
          key={exercise.id}
        >
          <Card
            {...exercise}
            key={exercise.id}
          />
        </Link>
      )
    }
  </>
)

export default ExerciseList;
