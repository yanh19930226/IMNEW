import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './routerconfig'
import axios from 'axios'
import stores from './store/store'
import * as filters from './filters'
import Loading from './components/loading'
import Animate from 'animate.css'
//loadsh
import _ from 'lodash'
// vue-photo-preview
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";

//ui组件
import Vant from 'vant';
import 'vant/lib/index.css';

//工具
import utils from './utils' //获取url参数
Vue.prototype.$utils = utils //注册全局方法


Vue.use(Vant);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(VueRouter);
Vue.use(Loading);
Vue.use(Animate);
Vue.use(_);
Vue.use(preview);

Vue.config.productionTip = false

//引入全局的base文件
require('./assets/css/base.css');
require('./assets/css/action.css');
require("./assets/css/font-awesome.min.css");

//配置发送请求的信息，发送请求显示loading
axios.interceptors.request.use(function (config) {
  stores.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});
//配置请求回来的信息,请求回来loading消失
axios.interceptors.response.use(function (response) {
  stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});
//配置全局访问路径
// axios.defaults.baseURL = 'https://wisdom-scenic-api.whlyw.net/api/services/app'
//其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routerConfig
});
//定义一些常量
Vue.prototype.$app = {


};
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path === "/visited") {
    let ralate = {
      userId: utils.getUrlKey("userId"),
      lng: utils.getUrlKey("lng"),
      lat: utils.getUrlKey("lat")
    };
    //清空
    sessionStorage.clear();
    sessionStorage.setItem("ralate", JSON.stringify(ralate));
  }
  //判断是否有userid等相关信息 
  if (sessionStorage.getItem("ralate") == null) {
    let ralate = {
      userId: utils.getUrlKey("userId"),
      lng: utils.getUrlKey("lng"),
      lat: utils.getUrlKey("lat")
    };
    sessionStorage.setItem("ralate", JSON.stringify(ralate));
  }
  //设置document.title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});
new Vue({
  el: '#app',
  router,
  store: stores,
  render: h => h(App)
})
