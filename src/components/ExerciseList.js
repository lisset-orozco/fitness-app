import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import { Col } from 'react-flexbox-grid';
import link from './styles/Link.css.js';

// const style = {
//   textDecoration: 'none'
// };

const ExerciseList = ({Data}) => (
  <>
    {
      Data.map((exercise) =>
        <Col xs={12} sm={12} md={12} lg={6} key={exercise.id} >
          <Link //to="/exercise/detail" key={exercise.id} {...exercise}
            to={{
              pathname: '/exercise/detail',
              exerciseId: exercise.id
            }}
            key={exercise.id}
            style={link.decoration}
          >
              <Card
                {...exercise}
                key={exercise.id}
              />
          </Link>
        </Col> 
      )
    }
  </>
)

export default ExerciseList;
