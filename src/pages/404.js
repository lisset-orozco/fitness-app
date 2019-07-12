import React from 'react';

import '../components/styles/Errors.css';
import NotFoundImg from '../images/404.png';
import { Grid , Container} from '@material-ui/core';

const NotFound = () => (
  <div align="center" className="Error_Margin">
    <b className="Error_Text"><span>Error: 404</span><br/>
    <span>Page Not Found</span></b>
    <img src={NotFoundImg} alt="404 NotFound" className="Error" /> 
  </div>
)

export default NotFound;
