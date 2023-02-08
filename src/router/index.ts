import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (to.path === from.path) return;
    return { top: 0 };
  },
  routes: [],
});

export default router;
