import Vue from 'vue';
import axios from 'axios';
import store from './store'
// 整个应用跨源携带凭证
axios.defaults.withCredentials=true
// 拦截器配置,在发送数据请求之前打开loading,响应之前关闭loading

axios.interceptors.request.use(function (config) {
    //添加公共请求头  token key:value
    store.dispatch('VIEW_LOADING',true)
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
  store.dispatch('VIEW_LOADING',false)
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
Vue.prototype.$axios=axios;
window.axios=axios