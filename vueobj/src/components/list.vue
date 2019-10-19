<template>
  <div class="home__list">
        <ul>
            <li
             v-for='item of listData'
            :key=item._id
            >
                <router-link :to="'/detail/'+item._id+'?dataName='+dataName">
                    <img :src='server.baseUrl+item.detail.detailbanner[0].pic'/>
                    <div class="canshu">
                        <p>{{item.title}}</p>
                        <p class="price">{{item.price|fillzero}}</p>
                        <p>销量:<span>{{item.sales|data}}</span></p>
                    </div>
                </router-link>
            
                <div class='car_icon'>
                    <a href="javascript:;" @click="ADD_ITEM(item)"><img src="/img/footer03b.png"/></a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import store from '../plugins/store'
export default {
    props:['listData','dataName'],
    methods:mapActions(['ADD_ITEM'])





    // data:function(){
    //     return{
    //         pic:'this.listData[0].detail.detailbanner[0].pic'
    //     }
    // },
    // updated:function(){
        
    //     this.pic=this.listData[0].detail.detailbanner[0].pic
    //     console.log(this.pic)
    // }
}
</script>
<style scoped>
  .home__list{}
  .home__list ul{}
  .home__list ul li{display: flex;justify-content:space-around;}
  .home__list ul li a{flex:1;display: flex;}
  .home__list ul li a img{width:2rem;height:2rem;margin:.16rem .24rem 0;}
  .home__list ul li a .canshu{height:1.31rem;padding-right:.24rem;}
  .home__list ul li a .canshu p{font:.26rem/.4rem "";color:#797979;width:3rem;white-space:nowrap;overflow: hidden;text-overflow: ellipsis;margin:.16rem}
  .home__list ul li a .canshu p.price{color:red}
  .home__list ul li .car_icon{flex:1;}
  .home__list ul li .car_icon img{width:.5rem;height:.5rem;}
</style>