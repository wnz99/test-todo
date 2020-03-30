import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from '../App';
import { mockInitialState } from './__fixtures__/mockInitialState';

const mockStore = configureStore();
const store = mockStore(mockInitialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
