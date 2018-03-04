const getFiles = require('./getFiles');
const renderMdx = require('./renderMdx');

module.exports = async patterns =>
  (await getFiles(patterns)).map(data =>
    Object.assign({contentmdx: renderMdx(data.content)}, data),
  );
