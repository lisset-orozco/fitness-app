import React from 'react';
// import { Container, Button, Link } from 'react-floating-action-button';
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import { MdFavorite, MdDelete, MdUpdate, MdSave } from 'react-icons/md';
import { useState, useEffect } from 'react';

const YourAwesomeComponent = () => {
  const stat = {
    isOpen: false,
  }
  const [state, setState] = useState({...stat});
  
  return(
    <FloatingMenu
      slideSpeed={500}
      direction="left"
      spacing={8}
      isOpen={state.isOpen}
    >
      <MainButton
        iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
        iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
        backgroundColor="black"
        onClick={() => setState({ isOpen: !state.isOpen })}
        size={56}
      />
        <ChildButton
          icon={<MdDelete style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
          onClick={() => console.log('First button clicked')}
        />
        <ChildButton
          icon={<MdUpdate style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={<MdSave style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
        />
    </FloatingMenu>)
}

export default YourAwesomeComponent;