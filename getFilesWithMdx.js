function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const getFiles = require('./getFiles');
const renderMdx = require('./renderMdx');

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (patterns) {
    return (yield getFiles(patterns)).map(function (data) {
      return Object.assign(data, { content: renderMdx(data.content) });
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();