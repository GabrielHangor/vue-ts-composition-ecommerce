import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import catalogModule from './modules/catalog';

import { registerModules } from '@/registerModules';

registerModules({ catalog: catalogModule });

const app = createApp(App);

app.use(createPinia());
app.use(router);

import './index.css';

app.mount('#app');
