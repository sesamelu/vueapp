<template>
  <div class='banner'>
    <ul>
      <router-link 
        v-for='item of bannerData'
        :to="'/detail/'+item._id+'?dataName='+dataName"
        tag="li" 
        :key=item._id
      >
         <img :src='server.baseUrl+item.banner' alt=""/>
          <div class="text-box">
            <h2>{{item.sub_title}}</h2>
          </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import $ from 'jquery'
import Swipe from '../assets/js/swipe.js';
export default {
  props:['bannerData','dataName'],
  updated(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>

<style scoped>
    .banner{position: relative;overflow: hidden; z-index: 1}
    .banner ul li{width:7.5rem;float:left;position: relative;}
    .banner ul li img{width:100%; display:block;height:4rem;}
    .banner ul li .text-box{width:6.9rem; padding:0 0.3rem;height:0.84rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
    .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
    .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
    .banner ol li.active{ background:#fff;}
</style>