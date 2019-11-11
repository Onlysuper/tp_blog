import Vue from 'vue';
import ViewUI from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';

// import style
import 'view-design/dist/styles/iview.css';
// import '../my-theme/index.less';
import '../my-theme/dist/iview.css';

Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
