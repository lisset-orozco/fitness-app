import React from 'react';

import '../components/styles/ExerciseNew.css';
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import FatalError from '../pages/500';
import Loading from '../components/Loading';

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    },
    loading: false,
    hasError: false
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      } 
    })
  }

  handleSubmit = async (e) => {
    this.setState({
      loading: true
    })

    e.preventDefault()
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }

      let res = await fetch('http://localhost:8000/api/exercises', config);
      let json = await res.json();

      this.setState({
        loading: false
      })

      this.props.history.push('/exercise');
    } catch (error) {
      this.setState({
        loading: false
      })
    }
  }

  render(){
    if(this.state.error)
      return <FatalError />

    return (
      this.state.loading
      ?
      <Loading />
      :
      <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
          <Card {...this.state.form} />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
          <ExerciseForm 
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            form={this.state.form}
          />
        </div>
      </div>
    )
  }
}

export default ExerciseNew;
