/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Controls from '../Controls';

let props;

describe('Controls component', () => {
  afterEach(() => {
    props.onAddItem.mockClear();
  });

  it('should render correctly', () => {
    props = {
      onAddItem: jest.fn(),
    };

    expect(toJson(shallow(<Controls {...props} />))).toMatchSnapshot();
  });
});
