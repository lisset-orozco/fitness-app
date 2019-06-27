import React from 'react';

import Card from '../components/Card';
import ExerciseForm from '../components/ExerciseForm';

const ExerciseNew = ({ onChange, onSubmit, form }) => (
  <div className="ExerciseNew_Margin">
    <div className="ExerciseNew_Card">
      <Card {...form} />
    </div>

    <div className="">
      <ExerciseForm 
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
      />
    </div>
  </div>
)

export default ExerciseNew;
