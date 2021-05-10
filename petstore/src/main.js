import Vue from 'vue';
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import routes from './router/index'
// import Home from './components/Home.vue';

//引入国际化插件
Vue.use(VueI18n);

//引入饿了吗UI库
Vue.use(ElementUI);

//引入路由官方插件
Vue.use(VueRouter);

//根据路由配置文件创建router对象
const router = new VueRouter({
  // routes // (缩写) 相当于 routes: routes
  routes: routes
  //[
    //一个个link对象
  //    {path: '/home',name: 'app',component: Home}
  //  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});