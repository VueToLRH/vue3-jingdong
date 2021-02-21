import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
