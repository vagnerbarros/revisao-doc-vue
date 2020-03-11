import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/users/:id',
    name: 'detailUser',
    component: () => import('../views/DetailUser.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
