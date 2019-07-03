import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

const cancelSave = (e) => {
  e.preventDefault();

  window.location = '/exercise';
}

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
        <button 
          type="submit" 
          className="btn btn-primary float-right button-add"
          style={{ fontSize: "15px", alignItems: "center", display: "flex" }}
        >
          SAVE
          <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
        </button> 
        <button
          type="button"
          className="btn btn-secondary float-right button-add"
          style={{ fontSize: "15px", alignItems: "center", display: "flex", backgroundColor:"#DC004E", marginRight: '6px' }}
          onClick={cancelSave}
        >
          CANCEL
        </button>
      </form>
    </div>
  </>)
};

export default ExerciseForm;
