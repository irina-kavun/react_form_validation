import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import {Header} from './commons/Header';
import {Form, FormikForm, ReduxForm, ReactHookForm} from './pages';

import './App.css';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Form}/>
            <Route path='/form_2' component={FormikForm}/>
            <Route path='/form_3' component={ReduxForm}/>
            <Route path='/form_4' component={ReactHookForm}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
