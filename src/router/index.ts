// @ts-ignore
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/articel',
    name: 'articel',
    component: () => import(/* webpackChunkName: "article" */ '../views/Articel.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
  },
  // 管理员
  {
    path: '/write',
    name: 'write',
    component: () => import(/* webpackChunkName: "write" */ '../views/Admin/Write.vue'),
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
