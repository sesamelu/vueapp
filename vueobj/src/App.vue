<template>
  <div id="app">
    <Loading v-show="$root.$data.bLoading"></Loading>
    <Header v-show="$root.$data.bNav"></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer v-show="$root.$data.bFooter"></Footer> 
    
  </div>
</template>

<script>
//导入组件：定义组件，注册组件，使用组件
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';

//全局过滤器的配置
import './filters'

export default {
  data(){
    return {
      
    }
  },
  methods:{
    checkPath(path){
      if(/home|classify|shopcar|\//.test(path)){
        this.$root.$data.bNav=true;
        this.$root.$data.bFooter=true;
      }
      if(/user/.test(path)){
        this.$root.$data.bNav=false;
        this.$root.$data.bFooter=true;
      }
      if(/detail|reg|login/.test(path)){
        this.$root.$data.bNav=false;
        this.$root.$data.bFooter=false;
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
