import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router.js';
import store from './store/index.js';

// 将 封装的 axios 请求挂载到全局上，便于整个应用程序使用
import http from './utils/api.js';
Vue.prototype.$http = http 

// 安装 element - 一次性安装
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
