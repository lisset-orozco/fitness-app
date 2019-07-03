import React from 'react';

import '../components/styles/Errors.css';
import ImgNoResults from '../images/no-results.png';
import { Link } from 'react-router-dom';

const NoResults = () => (
  <>
    <div className="text-center">   
      <img src={ImgNoResults} alt="NoResults" className="Error_Image" />
      <h1 style={{color: '#00c853', fontSize: '60px'}}>Sorry</h1>
      <button style={{backgroundColor: '#29b6f6', 
        fontSize: '30px', 
        color:'white', 
        cursor: 'auto',
        borderRadius: '50px',
        padding: '10px 35px',
        border: 'none',
        outline: 'none',
        outlineOffset: 'none'}}
        
        >No results found! :(</button>
      <div style={{color: '#00796b'}}>
        <br/>
        <h4><span> We invite you to </span>
        <Link to={{
              pathname: '/exercise/new'
            }}
        >
          <span style={{ color: '#039be5', textDecoration: 'underline'}}>create</span>
        </Link>
      
          <span> content.</span>
        </h4>
        <h5>Thank you.</h5>
      </div>
    </div>
  </>
)

export default NoResults;
