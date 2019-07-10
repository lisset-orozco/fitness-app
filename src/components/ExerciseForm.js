import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import link from './styles/Link.css.js';
import styled from 'styled-components';

const StyledRoot = styled.div`
  .fab:hover {
    background-color: #b2b2b2;
    color: white;
    border: #b2b2b2;
  }
`;

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  }
}));

const ExerciseForm = ({ onChange, onSubmit, form, warning }) => {
  const classes = useStyles();

  return(
  <>
    <div className="container">
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <input 
            type="text" 
            className="form-control"
            placeholder="title" 
            name="title"
            onChange={onChange}
            value={form.title}
            required
          />
            <div style={{ fontSize: 12, color: "red" }} >
              { warning.titleError}
            </div>
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="description" 
            name="description"
            onChange={onChange}
            value={form.description}
            required
          />
            <div style={{ fontSize: 12, color: "red" }} >
              { warning.descriptionError }
            </div>
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="img" 
            name="img"
            onChange={onChange}
            value={form.img}
          />
        </div>
        <div className="form-row">
          <div className="col">
            <input 
              type="color" 
              className="form-control" 
              placeholder="leftColor" 
              name="leftColor"
              onChange={onChange}
              value={form.leftColor || '#56CCF2'}
            />
          </div>
          <div className="col">
            <input 
              type="color" 
              className="form-control"
              placeholder="rightColor" 
              name="rightColor"
              onChange={onChange}
              value={form.rightColor || '#2F80ED'}
            />    
          </div>
        </div>
        <br/>

        <Link to={{
              pathname: form.id ? '/exercise/detail' : '/exercise',
              exerciseId: form.id
            }}
            key={form.id}
            style={link.decoration}
        >
          <StyledRoot>
            <Button variant="outlined" color="default" className="float-right fab" style={{ marginLeft: '16px'}}>
            Cancel
            </Button>
          </StyledRoot>
      </Link>

      <button 
          type="submit" 
          className="btn btn-primary float-right button-add"
          style={{ fontSize: "15px", alignItems: "center", display: "flex" }}
        >
          SAVE
          <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
        </button>
      </form>
    </div>
  </>)
};

export default ExerciseForm;
