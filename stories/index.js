import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Count } from '../src/components/Count';
import '../src/containers/App/styles.scss';

storiesOf('Count', module)
  .add('Empty', () => (
    <Count
      shouldIncrement={action('increment it')}
      promiseIncrement={action('promise increment it')}
      count={0}
      promiseCount={0}
      rejectionCount={0}
      promisePending={false}
    />
  ))
  .add('Promise pending', () => (
    <Count
      shouldIncrement={action('increment it')}
      promiseIncrement={action('promise increment it')}
      count={0}
      promiseCount={0}
      rejectionCount={0}
      promisePending
    />
  ))
  .add('Count 1', () => (
    <Count
      shouldIncrement={action('increment it')}
      promiseIncrement={action('promise increment it')}
      count={1}
      promiseCount={0}
      rejectionCount={0}
      promisePending={false}
    />
  ))
  .add('Promise count 1', () => (
    <Count
      shouldIncrement={action('increment it')}
      promiseIncrement={action('promise increment it')}
      count={0}
      promiseCount={1}
      rejectionCount={0}
      promisePending={false}
    />
  ));
