import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledRoot = styled.div`
  .fab {
    position: fixed;
    right: 2%;
    bottom: 2%;
  }
`;

const FloatingAddButton = () => {
    return (
      <Link to="/exercise/new">
        <StyledRoot>
          <Fab className="fab" color="secondary">
            <AddIcon />
          </Fab>
        </StyledRoot>
      </Link>
    );
  }

export default FloatingAddButton;
