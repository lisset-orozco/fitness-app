import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Add.css';
import btnAdd from '../images/add.png';

const Add = () => (
  <Link to="/exercise/new">
    <img src={btnAdd} alt='add' className="Fitness-Add" />
  </Link>
)

export default Add;
