<template>
  <div class='footer-bottom'>
      <div class="footer"></div>
      <footer>
            <ul>
                <router-link to='/home' active-class="active" tag="li">
                    <i class="i1"></i><span>首页</span>
                </router-link>
                <router-link to='/classify' active-class="active" tag="li">
                    <i class="i2"></i><span>分类</span>
                </router-link>
                <router-link to='/shopcar' active-class="active" tag="li">
                    <i class="i3"></i><span>购物车</span>
                </router-link>
                <router-link to='/user' active-class="active" tag="li">
                    <i class="i4"></i><span>我的</span>
                </router-link>

                <!-- <li>
                    <a href="#"><i class="i2"></i><span>分类</span></a>
                </li>
                <li>
                    <a href="#"><i class="i3"></i><span>购物车</span></a>
                </li>
                <li>
                    <a href="#"><i class="i4"></i><span>我的</span></a>
                </li> -->
            </ul>
        </footer>
  </div>
  
</template>
<style scoped>
    footer{height:.97rem;border-top:.01rem solid #bfbfbf;position: fixed;left:0;right:0;bottom:0;background:#fff;}
    footer ul{display: flex;justify-content: space-around;}
    footer ul li{margin-top:.14rem;}
    footer ul li{display: block;}
    footer ul li i{display: block;width:.5rem;height:.5rem;background:url(../assets/images/bg.png) no-repeat;background-size:1rem 2rem;position: relative;}
    footer ul li i.i2{background-position: 0 -0.5rem;}
    footer ul li i.i3{background-position: 0 -1rem;}
    footer ul li i.i4{background-position: 0 -1.5rem;}
    footer ul li.active i.i1{background-position: -.5rem 0;}
    footer ul li.active i.i2{background-position: -.5rem -.5rem;}
    footer ul li.active i.i3{background-position: -.5rem -1rem;}
    footer ul li.active i.i4{background-position: -.5rem -1.5rem;}
    footer ul li span{display: block;font:.2rem/.32rem "";color:#808080;text-align: center;}
    footer ul li.active span{color:#000;}
    .footer{height:.98rem;}
</style>