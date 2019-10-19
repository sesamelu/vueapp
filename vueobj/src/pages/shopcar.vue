<template>
  <div class='shopcar'>
    <ul>
      <li 
      v-for='item of $store.state.user.data.goods'
      :key='item._id'
      >
        <input type="checkbox" id='checkbox' v-model="item.check"/>
        
        <img src="a.img"/>
        <div>
          <p>title</p>
          <span>{{item.price}}</span>
          <a href="javascript:;" @click='CHANGE_ITEM({_id:item._id,count:-1})'>-</a>
          <i>{{item.count}}</i>
          <a href="javascript:;"  @click='CHANGE_ITEM({_id:item._id,count:1})'>+</a>
        </div>
        <a href="javascript:;" @click='REMOVE_ITEM({_id:item._id})' >删除</a>
      </li>
    </ul>
    <button @click='CLEAR_BUYCAR()' v-show="$store.state.user.data.goods.length>0">全部删除</button>
    <span v-show="$store.state.user.data.goods.length>0">{{totals}}</span>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import store from '../plugins/store'
export default {
   beforeRouteEnter(to,from,next){//这里拿不到this
        //直接去store里拿数据进行判断，这里的数据登录的时候会被修改
        store.state.user.err==0?next():next('/login')
        // console.log(store.state.user)
    
        // axios({
        //     url:'http://localhost:3000/api/user',
        // }).then(
        //     res=>{
        //         // console.log(res.data)
        //         res.data.err==0?next(_this=>_this.userdata=res.data.data):next('/login')
        //     }
        // )
    },
  data(){
    return {
      good:store.state.user
    }
  },
  computed:{
    // ...mapGetters(['goods']),
    totals:(state)=>{
      let sum = 0;
      if(store.state.user.data.goods){
        store.state.user.data.goods.forEach((item,index) => {
        if(item.check==true){
          sum += item.price*item.count
        }
      });
    }
    return sum;
  },
  },
  methods:{
    ...mapActions(['CHANGE_ITEM','REMOVE_ITEM','CHECK_ITEM','CLEAR_BUYCAR']),

  },
  watch:{
    //检测goods发生变化，就更新localstorage中的内容
    good:{
      handler(current,prev){
        // console.log(current)
        let userdata=current;
        window.localStorage.setItem('user',JSON.stringify(userdata))
      },
      // immediate:true,
      deep:true
    },
  }
}
</script>

<style scoped>
 .shopcar{font:.38rem/.4rem "";}
</style>