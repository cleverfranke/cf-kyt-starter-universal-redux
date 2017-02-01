

import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './';

it('should render the NotFound container as a section element', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper.is('section')).toBeTruthy();
});
