import React from 'react';
import './styles/Welcome.css';

const Welcome = ({username}) => (
  <div className="container">
    <div className="Fitness-User-Info" center="true">
      <h1>Welcome {username}</h1>
      <p>Let's workout to get someone gains!</p>
    </div>
  </div>
)

export default Welcome;
