import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

function route(path: string, name: string) {
  return {
    path,
    name,
    component: () => import(`./views/${name}.vue`),
  };
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    route('/', 'Home'),
  ],
});
