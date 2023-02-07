import type { Router, RouteRecordRaw } from 'vue-router';

const moduleRoutes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/AboutPage.vue'),
  },
];

export default (router: Router) => {
  moduleRoutes.forEach((route) => router.addRoute(route));
};
