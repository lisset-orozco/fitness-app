import React from 'react';

import Card from '../components/Card';

const ExerciseList = ({Data}) => (
  <div>
    {
      Data.map((exercise, index) =>
        <Card
          {...exercise}
          key={index}
        />
      )
    }
  </div>
)

export default ExerciseList;
