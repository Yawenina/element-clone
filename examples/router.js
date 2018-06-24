
import VueRouter from 'vue-router';
const routes = [
    {
      path: '/button',
      component: (resolve) => require(['./components/button.vue'], resolve)
    },
    {
      path: '/container',
      component: (resolve) => require(['./components/container.vue'], resolve)
    },
    {
      path: '/icon',
      component: (resolve) => require(['./components/icon.vue'], resolve)
    },
    {
      path: '/layout',
      component: (resolve) => require(['./components/layout.vue'], resolve)
    }];
export default new VueRouter({
  routes
});

  