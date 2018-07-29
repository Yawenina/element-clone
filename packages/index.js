// This file is auto gererated by build/bin/build-entry.js

  import Alert from './alert';
  

  import Aside from './aside';
  

  import Button from './button';
  

  import ButtonGroup from './button-group';
  

  import Col from './col';
  

  import Container from './container';
  

  import Footer from './footer';
  

  import Header from './header';
  

  import Icon from './icon';
  

  import Input from './input';
  

  import Loading from './loading';
  

  import Main from './main';
  

  import Notification from './notification';
  

  import Radio from './radio';
  

  import RadioGroup from './radio-group';
  

  import Row from './row';
  

const version = '1.0.0';
const components = [
  Alert,Aside,Button,ButtonGroup,Col,Container,Footer,Header,Icon,Input,Loading,Main,Notification,Radio,RadioGroup,Row
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
  Alert,
Aside,
Button,
ButtonGroup,
Col,
Container,
Footer,
Header,
Icon,
Input,
Loading,
Main,
Notification,
Radio,
RadioGroup,
Row
}

export default {
  install,
  version,
  Loading
}
  