import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';

import detailsModule from './modules/details';
import aboutModule from './modules/about';
import contactModule from './modules/contact';
import homeModule from './modules/home';
import catalogModule from './modules/catalog';
import userModule from './modules/user';

import { registerModules } from '@/registerModules';

import './styles/index.css';
import './styles/toast.scss';

registerModules({
  catalog: catalogModule,
  about: aboutModule,
  contact: contactModule,
  home: homeModule,
  details: detailsModule,
  user: userModule,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);

router.isReady().then(() => app.mount('#app'));
