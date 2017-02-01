
import React from 'react';
import { shallow } from 'enzyme';
import Addons from './';

it('should render the Addons container as a section element', () => {
  const wrapper = shallow(<Addons count={10} />);
  expect(wrapper.is('section')).toBeTruthy();
});
