import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  styButton: {
    position: 'fixed',
    right: '3%',
    bottom: '3%'
  },
}));

const FloatingAddButton = () => {
  const classes = useStyles();
  return (
    <Link to="/exercise/new">
      <Fab className={classes.styButton} color="secondary" style={{outline: 'none'}}>
        <AddIcon />
      </Fab>
    </Link>
  );
}

export default FloatingAddButton;
