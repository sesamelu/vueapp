<template>
  <div class='user'>
    <header class='cc'>
        <div class="search">
            <p>个人中心</p>
            <i></i>
        </div>
    </header>
    <div class="header"></div>

    <!--登录-->
    <div id="denglu" v-if='$store.state.user.err==0'>
			<div class="denglu_l">
				<img :src="server.baseUrl+$store.state.user.data.icon"/>
				<a href="#">欢迎，<span>{{$store.state.user.data.nikename}}</span></a>
			</div>
			<div class="denglu_r">
				<a href="javascript:;" @click="logout">注销</a>
			</div>
    </div>
    
    <div id="yingshi" v-if='$store.state.user.err==0'>
			<div class="yingshi_l">
				<div class="ys_box">
					<p>{{$store.state.user.data.credit}}</p>
					<a href="#">我的积分</a>
				</div>
				
			</div>
			<div class="yingshi_r">
				<img src="../assets/images/yingshi.png"/>
				<a href="#">优惠券</a>
			</div>
		</div>

    <!--主体-->
    <section id="fenlei">
            <ul class="fenleia">
                <li><a href="#"><img src="../assets/images/ic1.png"/><b>会员卡</b><span>&gt;</span></a></li>
                <li>
                    <a href="#"><img src="../assets/images/ic2.jpg"/><b>会员充值</b><span>&gt;</span></a>
                </li>
            </ul>
            <ul class="fenleib">
                <li><a href="#"><img src="../assets/images/ic1.png"/><b>订单中心</b><span>&gt;</span></a></li>
                <li><a href="#"><img src="../assets/images/ic2.jpg"/><b>地址管理</b><span>&gt;</span></a></li>
                <li><a href="#"><img src="../assets/images/ic1.png"/><b>设置</b><span>&gt;</span></a></li>
            </ul>
        </section>  

    <div class="footer"></div>
  </div>
</template>

<script>
import store from '../plugins/store'
export default {
    beforeRouteEnter(to,from,next){//这里拿不到this
        //直接去store里拿数据进行判断，这里的数据登录的时候会被修改
        store.state.user.err==0?next():next('/login')
        // console.log(store.state.err)
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
    methods:{
        logout(){
            axios({
                url:'/api/logout',
                method:'delete'
            }).then(
                //组件可以直接修改mutations的数据，不需要经过actions，直接将mutations的数据改为{}传给state
                res=>{
                    if(res.data.err==0){
                        let id=this.$store.state.user.data._id
                        let goods=this.$store.state.user.data.goods
                        axios({
                            url:'/api/usershopcar',
                            method:'post',
                            data:{
                                id:id,
                                goods:goods
                            }
                        }).then(
                            res=>{
                                console.log(res.data)
                            }
                        )
                        this.$router.push('/home')
                        this.$store.commit('CHECK_USER',{
                            err:1,
                            msg:'未登录',  
                            data:{
                                good:[]
                            }                          
                        })
                        window.localStorage.removeItem('user')
                }//注销时发送请求，把用户信息和goods数据带过去，让node更新数据库中的user数据

             }
            )
        }
    }
}

</script>



<style scoped>
.header{height:.88rem;}
header{height:.88rem;background:#eeeff3;position: fixed;left:0;right:0;margin:auto;}
.search{padding:.16rem .16rem .18rem .16rem;height:.88rem;}
.search p{font:.32rem/.88rem "黑体";}
.search i{display: block;width:.3rem;height:.3rem;background:url(../assets/images/usersearch.png) no-repeat;position: absolute;right:.34rem;top:.27rem;background-size: .3rem .3rem;}


/*主体*/
#denglu{height:1.49rem;display: flex;justify-content: space-between;align-items:center;padding:0 .28rem 0 .24rem;background: #fff;}
#denglu .denglu_l{}
#denglu .denglu_l img{width:1rem;height:1rem;border-radius: 50%}
#denglu .denglu_l a{font:.3rem/1.49rem "黑体";padding-left:.2rem}
#denglu .denglu_r a{display:block;font:.24rem/.36rem "";color:#999;padding:0 .2rem 0 .2rem;background:#e5e5e5  no-repeat .04rem .03rem;border-radius: .16rem;background-size:.28rem .28rem;}


#yingshi{display: flex;justify-content: space-between;align-items: center;margin:.41rem 0;background: #fff;height:1.4rem;}
#yingshi .yingshi_l{flex:1;padding-left:.28rem;display: flex;align-items: center;border-right:.02rem solid #ebebeb;}
#yingshi .yingshi_l .ys_box{flex:1;padding-left:.2rem;}
#yingshi .yingshi_l .ys_box p{font:.28rem/.42rem "黑体";padding-left:.4rem}
#yingshi .yingshi_l .ys_box a{font:.24rem/.4rem "";color:#9a9a9a;}
#yingshi .yingshi_r{flex:1;display: flex;height:.7rem;}
#yingshi .yingshi_r img{display: block;width:.36rem;height:.36rem;display: block;margin:.17rem 0 0 .29rem;}
#yingshi .yingshi_r a{font:.28rem/.7rem "黑体";padding-left:.23rem;}

/*主体*/
#fenlei{background: #fff;margin-bottom:.41rem;}
#fenlei ul{margin-bottom:.5rem;}
#fenlei ul li{height:1.11rem;}
#fenlei ul li a{height:1.11rem;display:block;padding-right:.34rem;margin-left:.28rem;border-bottom:.01rem solid #ebebeb;}
#fenlei ul li a img{width:.38rem;height:.38rem;float:left;margin:.38rem 0 0 .04rem;}
#fenlei ul li a b{font:.28rem/1.11rem "黑体";margin-left:.22rem;float:left;}
#fenlei ul li a span{float:right;font:.28rem/1.11rem "";color:#a3a3a3;}


</style>