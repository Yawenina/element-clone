const fs = require('fs');
const path = require('path');
const Components = require('./get-components')();
const Examples = require('./get-examples')();
const uppercamelcase = require('uppercamelcase');
const tips = '// This file is auto gererated by build/bin/build-entry.js';
const version = require('../../package.json').version;

function buildElementEntry() {
  const importList = Components.map((name) => `
  import ${uppercamelcase(name)} from './${name}';
  `);
  const exportList = Components.map(name => uppercamelcase(name));
  const notElements = ['Loading'];
  const content = `${tips}
${importList.join('\n')}

const version = '${version}';
const components = [
  ${exportList.filter(item => !notElements.includes(item.name)).join(',')}
];
const install = Vue => {
  components.forEach(Component => {
    if (!Component.name) return;
    Vue.component(Component.name, Component);
  });
  Vue.directive('loading', Loading.directive);
  Vue.prototype.$notify = Notification;
};

// 确保是浏览器环境且引入了Vue
if (typeof window !== undefined && window.Vue) {
  install(Vue)
}

export {
  install,
  version,
  ${exportList.join(',\n')}
}

export default {
  install,
  version,
  Loading
}
  `

  fs.writeFileSync(path.resolve(__dirname, '../../packages/index.js'), content);
}

function buildExampleEntry() {
  const examples = Examples.map(name => {
    const filename = path.basename(name, '.vue');
    return `
    {
      path: '/${filename}',
      component: (resolve) => require(['./components/${name}'], resolve)
    }`
  });
  const content = `
import VueRouter from 'vue-router';
const routes = [${examples}];

export default new VueRouter({
  routes
});

  `;

  fs.writeFileSync(path.resolve(__dirname, '../../examples/router.js'), content);
}

buildElementEntry();
buildExampleEntry();
