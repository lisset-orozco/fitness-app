import React from 'react';

import Card from '../components/Card';

const ExcerciseList = (props) => (
  <div>
    {
      props.Data.map((exercise, index) => (
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

export default ExcerciseList;
