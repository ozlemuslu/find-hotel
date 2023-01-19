import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import store from './store';
import messages from './locale/i18n';
import router from './router'
import VModal from 'vue-js-modal';

Vue.use(VueI18n);
Vue.use(VModal, { dynamic: true, dialog: true });

const i18n = new VueI18n({
  locale: 'tr', 
  messages,
});

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app');

i18n.locale = 'tr';