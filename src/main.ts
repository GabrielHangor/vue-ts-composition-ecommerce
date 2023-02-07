import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import detailsModule from './modules/details';
import aboutModule from './modules/about';
import contactModule from './modules/contact';
import homeModule from './modules/home';
import catalogModule from './modules/catalog';

import { registerModules } from '@/registerModules';

registerModules({
  catalog: catalogModule,
  about: aboutModule,
  contact: contactModule,
  home: homeModule,
  details: detailsModule,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

import './index.css';

app.mount('#app');
