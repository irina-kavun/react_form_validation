import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import {Header} from './commons/Header';
import {Form} from './pages/Form';
import {FormikForm} from "./pages/FormikForm";
import {ReduxForm} from "./pages/ReduxForm";

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
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
