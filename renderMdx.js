var MDXC = require('mdxc');

var mdxc = new MDXC({
  commonJS: true,
  pragma: 'createElement',
  linkify: true,
  typographer: true
});

module.exports = function (markdown) {
  return mdxc.render(markdown);
};
