import type { Router, RouteRecordRaw } from 'vue-router';

const moduleRoutes: RouteRecordRaw[] = [
  {
    path: '/details',
    name: 'details',
    component: () => import('./views/DetailsPage.vue'),
  },
];

export default (router: Router) => {
  moduleRoutes.forEach((route) => router.addRoute(route));
};
