import React from 'react';
import { shallow } from 'enzyme';

import { ReduxContainer, mapStateToProps, mapDispatchToProps } from './';

import { shouldIncrement } from '../../redux/reducers/modules/counter';

const handleIncrement = () => {};

describe('The Redux container', () => {
  it('should render as a section element', () => {
    const wrapper = shallow(<ReduxContainer shouldIncrement={handleIncrement} />);
    expect(wrapper.is('section')).toBeTruthy();
  });

  it('should return an empty object in the mapStateToProps', () => {
    const state = mapStateToProps();
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });

  it('should return an object of actions when calling mapDispatchToProps', () => {
    const state = mapDispatchToProps();
    const expectedState = {
      shouldIncrement,
    };
    expect(state).toEqual(expectedState);
  });
});
