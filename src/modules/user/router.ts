import type { Router, RouteRecordRaw } from 'vue-router';

const moduleRoutes: RouteRecordRaw[] = [
  {
    path: '/user',
    name: 'UserPage',
    component: () => import('./views/UserDetailsPage.vue'),
    meta: { requiresAuth: true },
  },
];

export default (router: Router) => {
  moduleRoutes.forEach((route) => router.addRoute(route));
};
