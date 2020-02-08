import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Form} from './pages/Form';
import {FormikForm} from "./pages/FormikForm";
import {Header} from './commons/Header';

import './App.css';

export const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Form}/>
          <Route path='/form_2' component={FormikForm}/>
        </Switch>
      </div>
    </Router>
  );
};
