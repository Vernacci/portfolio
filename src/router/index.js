import { createRouter, createWebHashHistory } from 'vue-router';

import Projects from '../components/Projects.vue';
import Header from '../components/Header.vue';
import Contact from '../components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Header,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
