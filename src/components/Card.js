import React from 'react';
import './styles/Card.css';
import emptyImg from '../images/empty.png';
import circlesImg from '../images/circles.png'; 
import Grid from '@material-ui/core/Grid';

const Card = (props) => {
  const { title, description, img, leftColor, rightColor} = (props.exercise || props)

  return(
    <div align="center">
      <div className="Fitness-Card" align="left"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor || '#2F80ED'}) `
        }}
      >
      <div >
        <div className="center">
          <Grid container >
            <Grid item xs={5} sm={5} className="card-info">
              <div align="right" >
                <img src={img || emptyImg} alt='exercise' className="Image"/>
              </div>
            </Grid>
            <Grid item xs={7} sm={7}>
              <div className="Fitness-Card-Info">
                <span><b>{title}</b></span>
                <p>{description}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </div>
);}

export default Card;
