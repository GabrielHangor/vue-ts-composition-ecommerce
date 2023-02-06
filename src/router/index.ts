import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../shared/views/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../shared/views/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../shared/views/ContactPage.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../shared/views/DetailsPage.vue'),
    },
    {
      path: '/investors',
      name: 'investors',
      component: () => import('../shared/views/InvestorsPage.vue'),
    },
  ],
});

export default router;
