var React = require('react');

module.exports = function (code) {
  var module = { exports: null };
  var createFactory = React.createFactory,
    createElement = React.createElement;

  try {
    eval(code);
    /* eslint no-eval: 0 */
  } catch (e) {
    return () => `Error: ${e.message}`;
  }
  return module.exports;
};
