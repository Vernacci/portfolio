import { createRouter, createWebHashHistory } from 'vue-router';

import Projects from '../components/Projects.vue';
import Home from '../components/Home.vue';
import Contact from '../components/Contact.vue';
import Skills from '../components/Skills.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
