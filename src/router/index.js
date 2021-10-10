import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/replace',
  //   name: 'replace',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // }
],

 router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
