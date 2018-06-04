// This file is auto gererated by build/bin/build-entry.js

  import Row from './row';
  

const version = '1.0.0';
const components = [
  Row
];
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  })
};

// 确保是浏览器环境且引入了Vue
if (typeof window !== undefined && window.Vue) {
  install(Vue)
}

export {
  install,
  version,
  Row
}

export default {
  install,
  version
}
  