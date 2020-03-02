import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Calendar from '../views/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
]

const router = new VueRouter({
  routes
});

export default router;