import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from '../packages';
import router from './router';
import App from './App';
import '@/packages/theme-chalk/src/index.scss';
Vue.use(VueRouter);
Vue.use(Element);

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
