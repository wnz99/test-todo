/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SimpleButton from '../SimpleButton';

let props;

describe('SimpleButton component', () => {
  afterEach(() => {
    props.onClick.mockClear();
  });

  it('should render correctly', () => {
    props = {
      icon: 'play',
      intent: 'primary',
      className: '',
      onClick: jest.fn(),
      active: false,
    };

    expect(
      toJson(mount(<SimpleButton {...props}>Button</SimpleButton>))
    ).toMatchSnapshot();
  });

  it('should render button text', () => {
    props = {
      icon: 'play',
      intent: 'primary',
      className: '',
      onClick: jest.fn(),
      active: false,
    };

    const wrapper = mount(<SimpleButton {...props}>Button</SimpleButton>);
    expect(wrapper.find('.btn-text').text()).toEqual('Button');
  });

  it('should render primary button', () => {
    props = {
      icon: 'play',
      intent: 'primary',
      className: '',
      onClick: jest.fn(),
      active: false,
    };

    const wrapper = mount(<SimpleButton {...props}>Button</SimpleButton>);

    expect(wrapper.exists('.btn')).toEqual(true);
    expect(wrapper.find('.btn').hasClass('btn-primary')).toEqual(true);
  });

  it('should render danger button', () => {
    props = {
      icon: 'play',
      intent: 'danger',
      className: '',
      onClick: jest.fn(),
      active: false,
    };

    const wrapper = mount(<SimpleButton {...props}>Button</SimpleButton>);

    expect(wrapper.exists('.btn')).toEqual(true);
    expect(wrapper.find('.btn').hasClass('btn-danger')).toEqual(true);
  });

  it('should call onClick function when button clicked', () => {
    props = {
      icon: 'play',
      intent: 'danger',
      className: '',
      onClick: jest.fn(),
      active: false,
    };

    const wrapper = mount(<SimpleButton {...props}>Button</SimpleButton>);

    wrapper.find(`.btn`).simulate('click', { preventDefault() {} });
    expect(props.onClick).toHaveBeenCalled();
  });
});
