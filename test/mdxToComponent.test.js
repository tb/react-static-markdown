const React = require('react');
const getFilesWithMdx = require('../getFilesWithMdx');
const mdxToComponent = require('../mdxToComponent');
const renderer = require('react-test-renderer');

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.value}`);
  }
}

test('mdxToComponent', () => {
  return getFilesWithMdx('test/pages/*.md').then(pages => {
    expect(pages.length).toBe(1);
    const Component = mdxToComponent(pages[0].contentmdx)
    const res = renderer.create(Component({
      value: 'React Value',
      Hello,
    }));
    expect(res.toJSON()).toMatchSnapshot();
  });
});
