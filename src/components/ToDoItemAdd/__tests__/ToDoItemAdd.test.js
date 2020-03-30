/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ToDoItemAdd from '../ToDoItemAdd';
import SimpleButton from '../../SimpleButton';

const item = {
  id: 1,
  name: 'test name',
  description: 'test description',
};

const props = {
  item,
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
};

describe('ToDoItemAdd component', () => {
  afterEach(() => {
    props.onCancel.mockClear();
    props.onSubmit.mockClear();
  });

  it('should render correctly', () => {
    expect(toJson(mount(<ToDoItemAdd {...props} />))).toMatchSnapshot();
  });

  it('should display form elements', () => {
    const wrapper = mount(<ToDoItemAdd {...props} />);

    expect(wrapper.find(SimpleButton).length).toEqual(2);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('.item-add-form-label').length).toEqual(2);
    expect(wrapper.find('.item-add-from-input').length).toEqual(3);
  });

  it('should call onSubmit function when save button clicked', () => {
    const wrapper = shallow(<ToDoItemAdd {...props} />);

    const buttons = wrapper.find(SimpleButton);

    buttons.at(1).prop('onClick')();

    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel function when cancel button clicked', () => {
    const wrapper = shallow(<ToDoItemAdd {...props} />);

    const buttons = wrapper.find(SimpleButton);

    buttons.at(0).prop('onClick')();

    expect(props.onCancel).toHaveBeenCalledTimes(1);
  });
});
