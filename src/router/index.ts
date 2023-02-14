import { createRouter, createWebHistory } from 'vue-router';
import { useUser } from '@/modules/user/composables/useUser';

const { isLoggedIn } = useUser();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (to.path === from.path) return;
    return { top: 0 };
  },
  routes: [],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return { path: '/' };
  }
});

export default router;
