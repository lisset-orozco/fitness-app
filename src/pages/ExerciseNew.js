import React from 'react';

import Card from '../components/Card';
import ExerciseForm from '../components/ExerciseForm';

const ExerciseNew = ({ onChange, onSubmit, form, warning }) => (
  <div className="ExerciseNew_Margin">
    <div className="ExerciseNew_Card">
      <Card {...form} />
    </div>

    <div className="">
      <ExerciseForm 
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        warning={warning}
      />
    </div>
  </div>
)

export default ExerciseNew;
