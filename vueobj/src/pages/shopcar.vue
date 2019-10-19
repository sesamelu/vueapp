<template>
  <div class='shopcar'>
    <ul>
      <li 
      v-for='item of $store.state.user.data.goods'
      :key='item._id'
      >
        <input type="checkbox" id='checkbox' v-model="item.check"/>
        <img :src='server.baseUrl+item.detail.detailbanner[0].pic'/>
        <div class="change_box">
          <p class="title">{{item.title}}</p>
          <div class="change">
            <span class="price">{{item.price|fillzero}}</span>
            <span class="countbtn">
              <a href="javascript:;" @click='CHANGE_ITEM({_id:item._id,count:-1})'>-</a>
              <i>{{item.count}}</i>
              <a href="javascript:;"  @click='CHANGE_ITEM({_id:item._id,count:1})'>+</a>
            </span>
          </div>
        </div>
        <a href="javascript:;" @click='REMOVE_ITEM({_id:item._id})'>删除</a>
      </li>
    </ul>
    <div class="jiesuanfoot"></div>
    <div class="jiesuanbox">
      <p v-show="$store.state.user.data.goods && $store.state.user.data.goods.length>0" class="jiesuan">
        <label><input type="checkbox" v-model="checkcpt" @click='CHECK_ITEM(checkcpt)'/>全选</label>
        <button @click='CLEAR_BUYCAR()'>全部删除</button>
        <span>总计:{{totals|fillzero}}</span>
        <a href="javascript:;">结算</a>
      </p>
    </div>
    
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
      good:store.state.user,
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
    checkcpt:{
      get:function (state) {
       let checkallcpt=false
      let sum=0
      if(store.state.user.data.goods){
        let a=store.state.user.data.goods.length
        store.state.user.data.goods.forEach((item,index) => {
          if(item.check==true){
            sum+=1
          }          
      });
        if(sum==a){
          checkallcpt=true
        }else{
          checkallcpt=false
        }
      }
      return checkallcpt
    },
　   // setter
    set:function () {}
    }
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
 .shopcar{background: #fff;}
 .shopcar ul li{display: flex;justify-content:space-around;align-items: center;font:.26rem/.4rem "";margin:.2rem .1rem;background: #f9f9f9;}
 .shopcar ul li input{width:.3rem;height:.3rem}
 .shopcar ul li img{width:2rem;height:2rem;margin:0.2rem 0.1rem;}
 .shopcar ul li .change_box{width:3rem;}
 .shopcar ul li .change_box .title{width:3rem;white-space:wrap;}
 .shopcar ul li .change_box .change{display: flex;justify-content:space-between;margin-top:.3rem}
  .shopcar ul li .change_box .change .price{color:#f00;text-align: center;font:.3rem/.5rem ""}
  .shopcar ul li .change_box .change .countbtn{display: flex;justify-content:space-between;}
  .shopcar ul li .change_box .change .countbtn a{display:block;background:#cecece;width:0.5rem;height:0.5rem;font:0.3rem/0.5rem "宋体";text-align: center;}
  .shopcar ul li .change_box .change .countbtn i{display:block;background:#cecece;width:0.5rem;height:0.5rem;font:0.3rem/0.5rem "宋体";text-align: center;margin:0 0.05rem}
  .jiesuanbox{position: fixed;bottom:.96rem;width:100%;background: #fff;}
  .jiesuan{display: flex;justify-content:space-between;align-items: center;font:.3rem/.5rem "";}
  .jiesuan input{width:.3rem;height:.3rem;margin-left:.2rem;}
  .jiesuan button{border:none;background: #f9f9f9}
  .jiesuan span{display:block;width:2rem;}
  .jiesuan a{display:block;width:2rem;height:.8rem;font:.3rem/.8rem "";background:#f20;color:#fff;text-align: center}
  .jiesuanfoot{height:.8rem;}
</style>














<!-- 
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
    <button @click='CLEAR_BUYCAR()' v-show="$store.state.user.data.goods && $store.state.user.data.goods.length>0">全部删除</button>
    <span v-show="$store.state.user.data.goods && $store.state.user.data.goods.length>0">{{totals}}</span>
  </div>
</template>
<style scoped>
 .shopcar{font:.38rem/.4rem "";}
</style> -->
