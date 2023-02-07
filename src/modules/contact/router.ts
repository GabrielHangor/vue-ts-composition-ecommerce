import type { Router, RouteRecordRaw } from 'vue-router';

const moduleRoutes: RouteRecordRaw[] = [
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./views/ContactPage.vue'),
  },
];

export default (router: Router) => {
  moduleRoutes.forEach((route) => router.addRoute(route));
};
