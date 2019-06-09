import React from 'react';
import './styles/Card.css';
import exerciseImg from '../images/exercise.png'; 
import circlesImg from '../images/circles.png'; 

class Card extends React.Component {
  // background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
  render() {
    const { title, description, img, leftColor, rightColor} = this.props
    return (
      <div className="card mx-auto Fitness-Card"
      style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
      }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img} alt='exercise' className="float-right"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default Card;
