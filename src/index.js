// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, compose, createStore } from 'redux';
import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-js';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './store/reducers';
import rootEpic from './store/epics';

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

const composeEnhancers = enhancers => {
  if (process.env.NODE_ENV === 'development') {
    Reactotron.configure({ name: 'TO-DOs App' })
      .use(reactotronRedux())
      .connect();

    const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return composeFn(enhancers, Reactotron.createEnhancer());
  }

  return compose(enhancers);
};

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
