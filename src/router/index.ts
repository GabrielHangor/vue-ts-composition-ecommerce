import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsPage.vue'),
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreCarsPage.vue'),
    },
    {
      path: '/investors',
      name: 'investors',
      component: () => import('../views/InvestorsPage.vue'),
    },
  ],
});

export default router;
