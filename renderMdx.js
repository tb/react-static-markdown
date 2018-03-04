const MDXC = require('mdxc');

const mdxc = new MDXC({
  commonJS: true,
  pragma: 'createElement',
  linkify: true,
  typographer: true,
});

module.exports = markdown => mdxc.render(markdown);
