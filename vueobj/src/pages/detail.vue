<template>
  <div class='detail'>
    <header>
        <a href="javascript:window.history.go(-1)">&lt;</a>
        <span>产品详情</span>
    </header>
    <div class="header"></div>

    <div class="banner" v-if="$store.state.detail.detail">
        <ul>
            <li v-for="(item,index) of $store.state.detail.detail.detailbanner"
                :key=index
            >
                <img :src="server.baseUrl+item.pic" alt=""/>
            </li>

        <!-- <li>
            <img :src="server.baseUrl+$store.state.detail.detail.detailbanner[0].pic" alt=""/>
            <div class="text-box">
                <h2>这里是运动</h2>
            </div>
        </li> -->
        </ul>
    </div>
    <div class="detail-content" v-if="$store.state.detail.detail">
        <p class="title">{{$store.state.detail.title}}</p>
        <p class="price">{{$store.state.detail.price|fillzero}}</p>
        <div class="fright"><span>运费:<i>{{$store.state.detail.freight|fillzero}}</i></span><span>剩余:<i>2000</i></span><span>销量:<i>{{$store.state.detail.sales|data}}</i></span></div>
    </div>

    <div class="footer"></div>
        <footer>
            <div class="kefubox">
                <ul>
                    <li>
                        <a href="#"><i class="i2"></i><span>客服</span></a>
                    </li>
                    <router-link to="/shopcar" tag="li">
                        <a href="#"><i class="i3"></i><span>购物车</span></a>
                    </router-link>
                    <router-link to="/home" tag="li">
                        <a href="#"><i class="i4"></i><span>店铺</span></a>
                    </router-link>
                </ul>
            </div>
            <div class="buybox">
                <input type="button" class="addcar" value="加入购物车" @click="add($store.state.detail)" />
                <input type="button" class="imbuy" value="立即购买"/>
            </div>
        </footer>
    </div>
</template>
<script>
import $ from 'jquery'
import Swipe from '../assets/js/swipe.js';
import { mapActions } from "vuex";
import store from '../plugins/store'
export default {
    activated(){
        let id=this.$route.params.id;
        let dataName=this.$route.query.dataName;
        this.$store.dispatch('UPDATE_DETAIL',{dataName,id})

        // this.$axios({
        // url:'http://localhost:3000/api/'+dataname+'/'+id//后端设置了可以直接/id访问
        // }).then(
        // res=>{this.detaildata=res.data.data
        // // console.log(res.data.data)
        // //console.log(this.detaildata.detail.detailbanner[0].pic)
        // }) 
    },
    deactivated(){
        this.$store.dispatch('DEL_DETAIL',{})
    },
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
    },
    methods:{
        add(addpro){
            if(store.state.user.err==1){
                this.$router.push('/login')
            }else{
                this.$store.dispatch('ADD_ITEM',addpro)
            }
        },  
    }
}
</script>
<style scoped>
    .header{height:.88rem;}
    header{height:.88rem;background:#eeeff3;position: fixed;left:0;right:0;margin:auto;display: flex;justify-content:center; align-items:center;}
    header a{position: absolute;left:0.2rem;font-size:0.66rem;}
    header span{font-size:0.32rem;}

    .banner{position: relative;overflow: hidden; z-index: 1}
    .banner ul li{width:7.5rem;float:left;position: relative;}
    .banner ul li img{width:100%;height:5rem; display:block;}
    .banner ul li .text-box{width:6.9rem; padding:0 0.3rem;height:0.7rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
    .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
    .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
    .banner ol li.active{ background:#fff;}
    /*主体*/
    .detail-content{}
    .detail-content .title{font:.26rem/.6rem "";color:#808080;margin:0.2rem .5rem;width:6rem;}
    .detail-content .price{font:.26rem/.6rem "";color:#f00;margin:0.2rem .5rem}
    .detail-content .fright{display: flex;justify-content: space-around;font:.26rem/.6rem "";}

    /*底部*/
    footer{height:.97rem;border-top:.01rem solid #bfbfbf;position: fixed;left:0;right:0;bottom:0;background:#fff;display: flex;justify-content: space-between;}
    footer ul{display: flex;justify-content: space-around;}
    footer ul li{margin-top:.14rem;}
    footer ul li a{display: block;}
    footer ul li a i{display: block;width:.5rem;height:.5rem;background:url(../assets/images/bg.png) no-repeat;background-size:1rem 2rem;position: relative;}
    footer ul li a i.i2{background-position: 0 -0.5rem;}
    footer ul li a i.i3{background-position: 0 -1rem;}
    footer ul li a i.i4{background-position: 0 -1.5rem;}
    footer ul li a.active i.i1{background-position: -.5rem 0;}
    footer ul li a.active i.i2{background-position: -.5rem -.5rem;}
    footer ul li a.active i.i3{background-position: -.5rem -1rem;}
    footer ul li a.active i.i3{background-position: -.5rem -1.5rem;}
    footer ul li a span{display: block;font:.2rem/.32rem "";color:#808080;text-align: center;}
    footer ul li a.active span{color:#000;}
    footer .kefubox{flex:2;}
    footer .kefubox ul{display: flex;justify-content: space-around;}
    footer .buybox{flex:3;display: flex;justify-content: space-around;align-items: center;}
    footer .buybox input{border:0;width:2rem;height:.7rem;font:.26rem/.6rem "";color:#fff;margin-top:.1rem;}
    footer .buybox input.addcar{background:#f77;}
    footer .buybox input.imbuy{background:#f00;}
    .footer{height:.98rem;}
</style>