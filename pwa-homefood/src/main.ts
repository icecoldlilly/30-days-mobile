import Vue from 'vue';
import './plugins/vuetify';
import './plugins/amplify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import DefaultLayout from '@/layouts/DefaultLayout.vue'; // @ is an alias to /src
import AppLayout from '@/layouts/AppLayout.vue'; // @ is an alias to /src
Vue.component('default-layout', DefaultLayout);
Vue.component('app-layout', AppLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
