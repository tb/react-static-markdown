const fs = require('fs');
const globby = require('globby');
const matter = require('gray-matter');

module.exports = async patterns =>
  (await globby(patterns)).map(filepath => {
    const {data, content} = matter(fs.readFileSync(filepath, 'utf8'));
    return {...data, content};
  });
