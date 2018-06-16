
import VueRouter from 'vue-router';
const routes = [
  {
    path: '/layout',
    component: (resolve) => require(['./components/layout.vue'], resolve)
  }];

export default new VueRouter({
  routes
});

  