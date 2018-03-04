const getFilesWithMdx = require('../getFilesWithMdx');

test('getFilesWithMdx', () => {
  return getFilesWithMdx('test/pages/*.md').then(pages => {
    expect(pages.length).toBe(1);
    expect(pages[0]).toMatchSnapshot();
  });
});
