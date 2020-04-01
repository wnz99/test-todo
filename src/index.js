/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import App from './App';
import rootReducer from './store/reducers';
import rootEpic from './store/epics';
import { loadState, saveState } from './utils';
import { INITIAL_STATE } from './store/reducers/tasks/tasksReducer';

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

const composeEnhancers = enhancers => {
  if (process.env.NODE_ENV === 'development') {
    const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return composeFn(enhancers);
  }

  return compose(enhancers);
};

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let persistedState = loadState('tasks_history');

persistedState = { tasks: { ...INITIAL_STATE, ...persistedState } };

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(
  throttle(() => {
    const {
      tasks: { history },
    } = store.getState();
    saveState(
      {
        history,
      },
      'tasks_history'
    );
  }, 1000)
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
