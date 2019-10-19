import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置应用的字体比例
// import font from './assets/js/font';
import './assets/js/font';//直接引入即可，没有导出，不用变量保存，直接拿过来使用
import './assets/css/public.css';//css会全局暴露

//引入路由并注册到根实例
import router from './plugins/router'
//引入axios
import './plugins/axios'
//配置基础路径
Vue.prototype.server = require('../config/server')

//引入状态管理
import store from './plugins/store'

//强刷页面时，将localstorage的数据存到store中
let local = window.localStorage.getItem('user')
let localjson=(JSON.parse(local))
if(local){
  store.commit('CHECK_USER',localjson)
  // console.log(localjson.user)
}


new Vue({
  data:{
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
