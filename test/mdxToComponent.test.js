const React = require('react');
const getFilesWithMdx = require('../getFilesWithMdx');
const mdxToComponent = require('../mdxToComponent');
const renderer = require('react-test-renderer');

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.value}`);
  }
}

const factories = {
  'code': (props, children) =>
    React.createElement('pre', {id: 'codeFactory'}, children),
};

describe('mdxToComponent', () => {
  test('render valid', () => {
    return getFilesWithMdx('test/pages/*.md').then(pages => {
      expect(pages.length).toBe(1);
      const Component = mdxToComponent(pages[0].content);
      const res = renderer.create(Component({
        factories,
        value: 'React Value',
        Hello,
      }));
      expect(res.toJSON()).toMatchSnapshot();
    });
  });

  test('render without prop', () => {
    const content = `<Hello value={value} />`
    const Component = mdxToComponent(content);
    const res = renderer.create(Component({
      factories,
      value: 'React Value',
      Hello,
    }));
    expect(res.toJSON()).toMatchSnapshot();
  });
});
