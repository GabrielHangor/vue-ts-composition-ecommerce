import type { Router, RouteRecordRaw } from 'vue-router';

const moduleRoutes: RouteRecordRaw[] = [
  {
    path: '/catalog',
    name: 'CatalogPage',
    component: () => import('./views/CatalogPage.vue'),
  },
  {
    path: '/catalog/:id',
    name: 'Vehicle',
    props: true,
    component: () => import('./views/VehiclePage.vue'),
  },
];

export default (router: Router) => {
  moduleRoutes.forEach((route) => router.addRoute(route));
};
