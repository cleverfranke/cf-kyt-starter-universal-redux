import React from 'react';
import { shallow } from 'enzyme';
import { Count } from './';

const handleIncrement = () => {};

describe('The Count component', () => {
  it('should render as a div element', () => {
    const wrapper = shallow(
      <Count
        shouldIncrement={handleIncrement}
        promiseIncrement={handleIncrement}
        count={0}
        promiseCount={0}
        rejectionCount={0}
        promisePending={false}
      />
    );
    expect(wrapper.is('div')).toBeTruthy();
  });
});
