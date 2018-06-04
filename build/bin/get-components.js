const fs = require('fs');
const path = require('path');

module.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'));
  const excludeDirs = ['.DS_Store', 'index.js', 'theme-chalk'];
  return dirs.filter(dirName => !excludeDirs.includes(dirName));
};
