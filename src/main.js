import Vue from 'vue'
import App from './App.vue'

//配置axios
import axios from 'axios'
Vue.prototype.$axios = axios;

//配置路由
import VueRorter from 'vue-router';
Vue.use(VueRorter);
import router from './router/router';

//引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
