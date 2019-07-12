import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import link from './styles/Link.css.js';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginRight: theme.spacing(1),
  },
  leftIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  buttonHover: {
    backgroundColor: 'transparent',
    color: 'black',

    "&:hover": {
      backgroundColor: '#b2b2b2',
      color:'white',
      border:'#b2b2b2'
    }
  }
}));

const ExerciseForm = ({ onChange, onSubmit, form, warning }) => {
  const classes = useStyles();

  return(
    <div className="container">
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <TextField
          fullWidth
          id="outlined-dense"
          label="title"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          type="text" 
          name="title"
          value={form.title}
          onChange={onChange}
          autoFocus
          required
        />
        <div style={{ fontSize: 12, color: "red" }} >
          { warning.titleError}
        </div>

        <TextField
          fullWidth
          id="outlined-dense"
          label="description"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          name="description"
          onChange={onChange}
          value={form.description}
          required
        /> 
        <div style={{ fontSize: 12, color: "red" }} >
          { warning.descriptionError }
        </div>

        <TextField
          fullWidth
          id="outlined-dense"
          label="image"
          placeholder="link" 
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          name="img"
          onChange={onChange}
          value={form.img}
        /> 

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="leftColor"
              margin="dense"
              type="color" 
              onChange={onChange}
              value={form.leftColor || '#56CCF2'}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              name="rightColor"
              type="color" 
              margin="dense"
              onChange={onChange}
              value={form.rightColor || '#2F80ED'}
            />
          </Grid>
        </Grid>
        <br/>

        <Link to={{
              pathname: form.id ? '/exercise/detail' : '/exercise',
              state: form.id
            }}
            key={form.id}
            style={link.decoration}
        >
          <Button variant="contained" color="default" className={clsx(classes.buttonHover)} style={{ marginLeft:'16px', float:'right'}}>
          Cancel
          </Button>
        </Link>
        <Button type="submit"  variant="contained" color="primary" className={clsx(classes.button)} style={{ float:'right'}}>
          Save
          <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        </Button>
      </form>
    </div>
  )
};

export default ExerciseForm;
