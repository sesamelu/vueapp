<template>
  <div id="app">
    <Loading v-show='this.$store.state.bLoading'></Loading>
    <Header v-show='this.$store.state.bHeader'></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer v-show='this.$store.state.bFooter'></Footer> 
    
  </div>
</template>

<script>
//导入组件：定义组件，注册组件，使用组件
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';
import {VIEW_HEADER,VIEW_FOOTER} from './store/types'
//全局过滤器的配置
import './filters'

export default {
  data(){
    return {
      
    }
  },
  mounted(){
  // console.log('store',this.$store)
  },
  methods:{
    checkPath(path){
      //路由变化时才发送请求，不能用mapActions,mapActions会立即执行
      if(/home|classify|shopcar|\//.test(path)){
        this.$store.dispatch(VIEW_HEADER,true)
        this.$store.dispatch(VIEW_FOOTER,true)
      }
      if(/user/.test(path)){
        this.$store.dispatch(VIEW_HEADER,false)
        this.$store.dispatch(VIEW_FOOTER,true)
      }
      if(/detail|reg|login/.test(path)){
        this.$store.dispatch(VIEW_HEADER,false)
        this.$store.dispatch(VIEW_FOOTER,false)
      }
    }
  },
  watch:{
    $route:{
      handler(current,prev){
        this.checkPath(current.path)
      },
      immediate:true,
      deep:true
    },
  },
  name: 'app',
  components: {
    Header,Footer,Loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
