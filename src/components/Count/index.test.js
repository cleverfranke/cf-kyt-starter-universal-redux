

import React from 'react';
import { shallow } from 'enzyme';
import { Count } from './';

const handleIncrement = () => {};

it('should render the Count component as a div element', () => {
  const wrapper = shallow(<Count shouldIncrement={handleIncrement} count={10} />);
  expect(wrapper.is('div')).toBeTruthy();
});
