import Vue from 'vue';
import ViewUI from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';
import storage from "./storage/index.ts";
// import style
Vue.prototype.mStorage=storage;
import 'view-design/dist/styles/iview.css';
import '@src/assets/theme/theme.less';
import '../my-theme/index.less';

// import '../my-theme/dist/iview.css';

// if(storage.get('theme')=='night'){
//   // 夜间
//   console.log('夜间')
  
// }else{
//   // 日间
//   console.log('日间')
// }

import '../src/assets/theme/night.less';
Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
