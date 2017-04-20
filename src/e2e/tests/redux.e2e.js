/* global jasmine */

import 'regenerator-runtime/runtime'; // needed for async and await
import visit from '../helpers/visit';

describe('When visiting the redux page', () => {
  let originalTimeout;

  /**
   * Increase the default Jasmine timeout interval because our tests are taking
   * longer.
   */
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  /**
   * Reset the original default timeout of Jasmine.
   */
  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  test('it shows a welcome text', async () => {
    const page = visit('/redux');
    const text = await page
      .wait('#root div section')
      .evaluate(() => document.body.textContent)
      .end();

    expect(text).toContain('Below is a small component - found in components/Count/ which does little less than showing the value of the different count reducer values in Redux.');
  });

  test('an user can increment the counter by clicking the "Increment count" button', async () => {
    const page = visit('/redux');
    const element = await page
      .wait('#incrementCount')
      .click('#incrementCount')
      .click('#incrementCount')
      .evaluate(() => document.querySelector('#root section div p:first-of-type').textContent)
      .end();

    expect(element).toContain('Count: 3');
  });

  test('an user can increment the promise counter by clicking the "Promised increment count" button', async () => {
    const page = visit('/redux');
    const element = await page
      .wait('#incrementAsyncCount')
      .click('#incrementAsyncCount')
      .click('#incrementAsyncCount')
      .wait(2500)
      .evaluate(() => document.querySelector('#root section div ul.list+p').textContent)
      .end();

    expect(element).toContain('Promise resolve count: 2Promise rejection count: 1');
  });

  test('after navigating, the state of this page should stay in Redux memory', async () => {
    const page = visit('/redux');
    const element = await page
      .wait('#incrementAsyncCount')
      .click('#incrementAsyncCount')
      .wait(1500)
      .click('a[href="/addons"]')
      .wait(500)
      .click('a[href="/redux"]')
      .wait('#root section div ul.list+p')
      .evaluate(() => document.querySelector('#root section div ul.list+p').textContent)
      .end();

    expect(element).toContain('Promise resolve count: 1Promise rejection count: 1');
  });
});
