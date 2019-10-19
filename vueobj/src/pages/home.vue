<template>
  <div class='home'>
    <Slider :banner-data='this.$store.state.banner' :data-name="'banner'"></Slider>
    <List :list-data='this.$store.state.home' :data-name="'home'" ></List>
  </div>
</template>

<script>
import Slider from '../components/silder'
import List from '../components/list'
export default {
  data:function(){
    return {
    }
  },
  components:{
    Slider,List
  },
  activated(){
    this.$store.dispatch('UPDATE_HOME')
    this.$store.dispatch('UPDATE_BANNER')
    //并行无关联读取数据
    // this.$axios({
    //   url:'http://localhost:3000/api/home'
    // }).then(
    //   res=>{
    //     this.listdata=res.data.data;
    //     }
    // )

    //  this.$axios({
    //   url:'http://localhost:3000/api/banner'
    // }).then(
    //   res=>{
    //     this.bannerdata=res.data.data;
    //     }
    // )
  }
}
</script>