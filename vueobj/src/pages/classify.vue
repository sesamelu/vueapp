<template>
  <div class='classify'>
    <List :list-data='$store.state.classify' :data-name="'classify'"></List>
  </div>
</template>


<script>
import List from '../components/list'
export default {
  data(){
    return {
      classifydata:[]
    }
  },
  components:{
    List
  },
  activated(){
    this.$store.dispatch('UPDATE_CLASSIFY')
    // this.$axios({
    //   url:'http://localhost:3000/api/classify',
    //   params:{_page:1,_limit:4}
    // }).then(
    //    res=>{
    //     this.classifydata=res.data.data;
    //     // console.log(res.data.data)
    //     }
    // )
  }
}
</script>