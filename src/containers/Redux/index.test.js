import React from 'react';
import { shallow } from 'enzyme';
import { ReduxContainer } from './';

const handleIncrement = () => {};

it('should render the Redux container as a section element', () => {
  const wrapper = shallow(<ReduxContainer shouldIncrement={handleIncrement} />);
  expect(wrapper.is('section')).toBeTruthy();
});
