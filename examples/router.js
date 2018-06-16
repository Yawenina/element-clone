
import VueRouter from 'vue-router';
const routes = [{
    path: '/components',
    component: (resolve) => require('./components', resolve)
  },{
    path: '/main.scss',
    component: (resolve) => require('./main.scss', resolve)
  }];

export default new VueRouter({
  routes
});

  