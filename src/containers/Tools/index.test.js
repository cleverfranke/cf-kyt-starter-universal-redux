import React from 'react';
import { shallow } from 'enzyme';
import Tools from './';

it('should render the Tools container as a section element', () => {
  const wrapper = shallow(<Tools />);
  expect(wrapper.is('section')).toBeTruthy();
});
