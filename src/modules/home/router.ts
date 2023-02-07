import type { Router, RouteRecordRaw } from 'vue-router';

const moduleRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomePage.vue'),
  },
];

export default (router: Router) => {
  moduleRoutes.forEach((route) => router.addRoute(route));
};
