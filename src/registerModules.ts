import router from '@/router';
import type { Router } from 'vue-router';

const registerModule = (module: Record<string, (router: Router) => void>) => {
  module.router(router);
};

export const registerModules = (modules: Record<string, Record<string, (router: Router) => void>>) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey];
    registerModule(module);
  });
};
