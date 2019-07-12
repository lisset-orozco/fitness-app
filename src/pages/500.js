import React from 'react';

import '../components/styles/Errors.css';
import FatalErrorImg from '../images/500.png';

const FatalError = () => (
  <div align="center" className="Error_Margin">
    <b className="Error_Text"><span>Error: 500</span><br/>
    <span>Unexpected Error</span></b>
    <img src={FatalErrorImg} alt="500 Unexpected Error" className="Error" /> 
  </div>
)

export default FatalError;
