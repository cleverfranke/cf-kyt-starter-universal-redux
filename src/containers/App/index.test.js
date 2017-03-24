

import React from 'react';
import { shallow } from 'enzyme';
import App from './';

it('should render the App container as a div element', () => {
  const wrapper = shallow(<App>Test</App>);
  expect(wrapper.is('div')).toBeTruthy();
});
