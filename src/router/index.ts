// @ts-ignore
import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../App.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashed',
    component: Layout,
    redirect:{
      name:'main'
    },
    children:[
      {
        path: 'main',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
        redirect:{
          name:'home'
        },
        children:[
          {
            path: 'home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
          },
          {
            path: 'about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
          },
          {
            path: 'articel',
            name: 'articel',
            component: () => import(/* webpackChunkName: "article" */ '../views/Articel.vue'),
          },
          {
            path: 'detail',
            name: 'detail',
            component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
          },
          // 管理员
          {
            path: 'write',
            name: 'write',
            component: () => import(/* webpackChunkName: "write" */ '../views/Admin/Write.vue'),
          }
        ]
      },
      
    ]
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: () => import(/* webpackChunkName: "signIn" */ '../views/signIn/signIn.vue'),
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
