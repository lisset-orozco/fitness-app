import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ExercisesContainer from '../pages/ExercisesContainer';
import ExerciseNewContainer from '../pages/ExerciseNewContainer';
import NotFound from '../pages/404';
import Detail from '../pages/Detail';
import ExerciseEdit from './ExerciseEdit'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/exercise" />)} />
      <Route exact path='/exercise' component={ExercisesContainer} />
      <Route path='/exercise/new' component={ExerciseNewContainer} />
      <Route path='/exercise/edit' component={ExerciseEdit} />
      <Route path='/exercise/detail' component={Detail} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;

