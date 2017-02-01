

import React from 'react';
import { shallow } from 'enzyme';
import Home from './';

it('should render the Home container as a section element', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.is('section')).toBeTruthy();
});
