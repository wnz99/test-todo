/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

configure({ adapter: new Adapter() });

global.mocksClear = mocks => mocks.forEach(mock => mock.mockClear());

global.createComponentWithProps = (Component, props) => (
  <Component {...props} />
);
global.createComponentWithProps.displayName = 'testComponent';
