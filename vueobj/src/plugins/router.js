import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//配置路由

//引入组件
//路由懒加载
import Home from '../pages/home.vue';
// import Classify from '../pages/classify.vue';
// let Classify=()=>{
//     return import('../pages/classify.vue')
// }
let Classify=()=>import('../pages/classify.vue');
// import Shopcar from '../pages/shopcar.vue';
let Shopcar=()=>import('../pages/shopcar.vue');
// import User from '../pages/user.vue';
import Detail from '../pages/detail.vue';
import Reg from '../pages/reg.vue';
import Login from '../pages/login.vue';
import Error from '../pages/error.vue';

let routes=[
    {path:'/home',component:Home},
    {path:'/classify',component:Classify},
    {path:'/shopcar',component:Shopcar},
    {path:'/user',component:(r)=>require(['../pages/user.vue'],r)},
    {name:"detail",path:'/detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,...route.query})},//这里注意detali路径的配置，要接收id，不要忘了加/:id;使用:to={}方法传递id时需要设置name
    {path:'/reg',component:Reg},
    {path:'/login',component:Login},
    {path:'/',component:Home},//访问/时找home
    {path:'*',component:Error},//都找不到时，找404
]

//创建路由并对外暴露
export default new VueRouter({
    routes:routes,
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0}

    }
})

