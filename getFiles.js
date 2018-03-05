function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fs = require('fs');
const globby = require('globby');
const matter = require('gray-matter');

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (patterns) {
    return (yield globby(patterns)).map(function (filepath) {
      const { data, content } = matter(fs.readFileSync(filepath, 'utf8'));
      return Object.assign({ content }, data);
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();