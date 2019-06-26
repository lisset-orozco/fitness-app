import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import httpClient from '../services/AxiosClient'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  const deleteData = () => {
    httpClient.delete(props.id).then((res) => {
      if (res.success) {
        window.location = '/exercise';
      }
    })
  }

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button} onClick={deleteData}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>

      <Link to={{
              pathname: '/exercise/edit',
              id: props.id
            }}
            key={props.id}
      >
        <Button variant="contained" color="primary" className={classes.button} >
          Edit
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </Link>
    </div>
  );
}
