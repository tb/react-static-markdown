const React = require('react');

module.exports = (code, factories = {}) => {
  const module = {exports: null};
  const {createFactory, createElement} = React;
  eval(code); /* eslint no-eval: 0 */
  return module.exports;
};
