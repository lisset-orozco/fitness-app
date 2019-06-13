import React from 'react';

import Card from '../components/Card';

const ExerciseList = ({Data}) => (
  <>
    {
      Data.map((exercise, index) =>
        <Card
          {...exercise}
          key={index}
        />
      )
    }
  </>
)

export default ExerciseList;
