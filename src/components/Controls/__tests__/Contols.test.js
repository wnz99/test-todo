/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import SimpleButton from '../../SimpleButton';
import Controls from '../Controls';

const mockInitialState = {
  tasks: {
    status: {
      isRecording: false,
      isPlaying: false,
    },
  },
};

const mockStore = configureStore();
const store = mockStore(mockInitialState);

const withProvider = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

let props;

describe('Controls component', () => {
  afterEach(() => {
    props.onAddItem.mockClear();
  });

  it('should render correctly', () => {
    props = {
      onAddItem: jest.fn(),
    };

    expect(toJson(mount(withProvider(Controls, props)))).toMatchSnapshot();
  });

  it('should display all action buttons', () => {
    const wrapper = mount(withProvider(Controls, props));

    expect(wrapper.find(SimpleButton).length).toEqual(4);
  });
});
