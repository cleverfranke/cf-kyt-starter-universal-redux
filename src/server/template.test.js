
import Template from './template';

let wrapper;
let props;

describe('The Template component', () => {
  beforeEach(() => {
    props = {
      cssBundle: 'test.css',
      jsBundle: 'test.js',
      root: '<div>Empty</div>',
      initialState: {},
    };
    wrapper = Template(props);
  });

  it('should return a string to Express', () => {
    expect(typeof wrapper).toBe('string');
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle not passing bundles in the props gracefully', () => {
    props = {
      root: '<div>Empty</div>',
      initialState: {},
    };
    wrapper = Template(props);
    expect(wrapper).toMatchSnapshot();
  });
});
