// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// css
import '../assets/stylesheets/application.scss';

// reducers
import { reducer as formReducer } from 'redux-form';
import dogsReducer from './reducers/dogs_reducer';

// containers
import DogsIndex from './containers/dogs_index';
import DogsNew from './containers/dogs_new';

const kennelName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;

const initialState = {
  kennel: kennelName,
  dogs: [
    { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' },
    { id: 5, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ]
};

const reducers = combineReducers({
  kennel: (state = null, action) => state,
  dogs: dogsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={DogsIndex} />
        <Route path="/dogs/new" exact component={DogsNew} /> 
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
