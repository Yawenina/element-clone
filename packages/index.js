// This file is auto gererated by build/bin/build-entry.js

  import Aside from './aside';
  

  import Col from './col';
  

  import Container from './container';
  

  import Footer from './footer';
  

  import Header from './header';
  

  import Icon from './icon';
  

  import Main from './main';
  

  import Row from './row';
  

const version = '1.0.0';
const components = [
  Aside,Col,Container,Footer,Header,Icon,Main,Row
];
const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component);
  })
};

// 确保是浏览器环境且引入了Vue
if (typeof window !== undefined && window.Vue) {
  install(Vue)
}

export {
  install,
  version,
  Aside,
Col,
Container,
Footer,
Header,
Icon,
Main,
Row
}

export default {
  install,
  version
}
  