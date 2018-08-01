
import VueRouter from 'vue-router';
const routes = [
    {
      path: '/alert',
      component: (resolve) => require(['./components/alert.vue'], resolve)
    },
    {
      path: '/button',
      component: (resolve) => require(['./components/button.vue'], resolve)
    },
    {
      path: '/container',
      component: (resolve) => require(['./components/container.vue'], resolve)
    },
    {
      path: '/demo-block',
      component: (resolve) => require(['./components/demo-block.vue'], resolve)
    },
    {
      path: '/icon',
      component: (resolve) => require(['./components/icon.vue'], resolve)
    },
    {
      path: '/input',
      component: (resolve) => require(['./components/input.vue'], resolve)
    },
    {
      path: '/layout',
      component: (resolve) => require(['./components/layout.vue'], resolve)
    },
    {
      path: '/loading',
      component: (resolve) => require(['./components/loading.vue'], resolve)
    },
    {
      path: '/notification',
      component: (resolve) => require(['./components/notification.vue'], resolve)
    }];

export default new VueRouter({
  routes
});

  