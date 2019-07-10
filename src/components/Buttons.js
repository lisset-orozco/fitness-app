import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import httpClient from '../services/AxiosClient';
import link from './styles/Link.css.js';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  buttonC: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1)
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
  buttonHover: {
    "&:hover": {
      backgroundColor: '#b2b2b2',
      color:'white',
      border:'#b2b2b2'
    }
  },
  input: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    border: '1px solid #d50000'
  },
  dense: {
    marginTop: theme.spacing(2),
  }
}));

const IconLabelButtons = (props) => {
  const classes = useStyles();

  const deleteData = () => {
    httpClient.delete(props.id).then((res) => {
      if (res.success) {
        setRedirectHome(true);
      }
    })
  }
  
  const [open, setOpen] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  const [redirectHome, setRedirectHome] = useState(false);

  const handleChange = e => {
    let value = e.target.value
    value.trim().toLowerCase() === 'delete'
    ?
    setEnableButton(false)
    :
    setEnableButton(true)
  }

  const handleClickOpen = () => (
    setOpen(true)
  )

  const handleClose = () => (
    setOpen(false)
  )

  return (
    redirectHome ?
      <Redirect to={{
        pathname: '/exercise',
        actionType: 'deleted'
      }} />
    :
    <div>
      {/* <ConfirmationDelete /> */}

      <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickOpen}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>

      <Link to={{
              pathname: '/exercise/edit',
              id: props.id
            }}
            key={1}
            style={link.decoration}
      >
        <Button variant="contained" color="primary" className={classes.button} >
          Edit
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </Link>
      
      <Link to={{
                    pathname: '/exercise',
                  }}
                  key={2}
                  style={link.decoration}
              >
                <Button variant="outlined" color="default" className={clsx(classes.button, classes.buttonHover)} >
                Cancel
                </Button>
      </Link>

      
      
      {/********************* CONFIRMATION DELETE {/*********************/}
      <br/>
      <div align="center">
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{color:'white', backgroundColor:'#f50057'}}>Are you absolutely sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone.
            <br/>
            Please type <b style={{color:'#f50057'}}>DELETE</b> to confirm you want to permanently delete it:
          </DialogContentText>
            <input 
              type="text"
              label="delete"
              style={{textTransform: 'uppercase'}} 
              className={clsx(classes.input)}
              onChange={handleChange}
              ></input>
        </DialogContent>
        <DialogActions className={classes.buttonC}>
          <Button onClick={handleClose} variant="outlined" color="default" className={classes.buttonHover}>
            Cancel
          </Button>
          <Button onClick={deleteData} variant="contained" color="secondary" disabled={enableButton}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}

export default IconLabelButtons;
