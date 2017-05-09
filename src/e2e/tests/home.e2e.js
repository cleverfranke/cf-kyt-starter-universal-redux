import 'regenerator-runtime/runtime'; // needed for async and await
import visit from '../helpers/visit';

describe('When visiting the homepage', () => {
  test('it shows a welcome text', async () => {
    const page = visit('/');
    const text = await page
      .wait('#root div section')
      .evaluate(() => document.body.textContent)
      .end();

    expect(text).toContain('Welcome to the CLEVER°FRANKE fork of the Universal React Starter-kyt');
  });

  test('it allows to navigate to the "Tools" page and shows a list of tools', async () => {
    const page = visit('/');
    const text = await page
      .wait('a[href="/tools"]')
      .click('a[href="/tools"]')
      .wait('ul.list')
      .evaluate(() => document.querySelector('#root section ul.list').textContent)
      .end();

    expect(text).toContain('React - component library');
    expect(text).toContain('Enzyme - React component testing');
  });
});
