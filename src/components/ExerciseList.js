import React from 'react';

import Card from '../components/Card';

const ExerciseList = ({Data}) => (
  <div>
    {
      Data.map((exercise, index) => (
        <Card
          title={exercise.title}
          description={exercise.description}
          img={exercise.img}
          leftColor={exercise.leftColor}
          rightColor={exercise.rightColor}
          key={index}
        />
        )
      )
    }
  </div>
)

export default ExerciseList;
