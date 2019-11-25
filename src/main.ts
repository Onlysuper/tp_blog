import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import storage from "./storage/index.ts";
// import style
import ViewUI from 'view-design';
import '../my-theme/index.less';
import '../src/assets/theme/night.less';
import '../src/assets/theme/day.less';

Vue.prototype.mStorage=storage;

Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
