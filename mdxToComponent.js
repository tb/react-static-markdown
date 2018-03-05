var React = require('react');

module.exports = function (code) {
  var module = { exports: null };
  var createFactory = React.createFactory,
    createElement = React.createElement;

  eval(code); /* eslint no-eval: 0 */
  return module.exports;
};
