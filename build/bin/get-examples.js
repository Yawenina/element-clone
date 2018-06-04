const fs = require('fs');
const path = require('path');

module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../../examples'));
  const excludeDirs = [
    'main.js',
    '.DS_Store',
    'index.html',
    'router.js',
    'App.vue'
  ];
  return dirs.filter(name => !excludeDirs.includes(name));
};
