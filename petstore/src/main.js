import Vue from 'vue';
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index'

//引入国际化插件
Vue.use(VueI18n);

//引入饿了吗UI库
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});